import React from 'react';
import { graphql } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Podcasts from '../components/podcasts';
import TeamMemberPreviewGrid from '../components/team-member/team-member-preview-grid';
import Layout from '../containers/layout';
import { filterOutDocsWithoutSlugs, getBlogUrl, getEventUrl, getPressReleaseUrl, mapEdgesToNodes } from '../lib/helpers';
import PreviewGrid from '../components/previewer/preview-grid';
import { format } from 'date-fns';

library.add(fab);
library.add(fas);

export const query = graphql`
  query IndexPageQuery {
    seo: sanitySeo {
      title
      description
      keywords
    }
    company: sanityCompanyInfo(_id: {regex: "/(drafts.|)companyInfo/"}) {
      companyName
      caption
      banner
      contact {
        email
        socialMedia {
          platformName
          url
          icon {
            name
            faPackage
            faIconName
          }
        }
      }
      podcasts {
        platform
        title
        subtitle
        description
        url
        coverArt {
          asset {
            _id
          }
        }
        icon {
          name
          faPackage
          faIconName
        }
      }
    }
    teamMembers: allSanityTeamMember(limit: 3, sort: { fields: [priority], order: ASC }) {
      edges {
        node {
          id
          slug {
            current
          }
          certifications
          _rawPerson(resolveReferences: {maxDepth: 1})
          person {
            name
            contact {
              email
              socialMedia {
                platformName
                url
                icon {
                  name
                  faPackage
                  faIconName
                }
              }
            }
            image {
              crop {
                _key
                _type
                top
                bottom
                left
                right
              }
              hotspot {
                _key
                _type
                x
                y
                height
                width
              }
              asset {
                _id
              }
            }
          }
        }
      }
    }
    posts: allSanityPost(sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          coverPhoto {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          slug {
            current
          }
        }
      }
    }
    pressReleases: allSanityPressRelease(sort: { fields: [publishedAt], order: DESC }) {
     edges {
       node {
        id
        source
        title
        url
        publishedAt
        slug {
          current
        }
       }
     }
    }
    events: allSanityEvent(sort: { fields: [eventAt], order: DESC }) {
      edges {
        node {
          id
          title
          eventAt
          coverPhoto {
            asset {
              _id
            }
          }
          organizers {
            person {
              name
              contact {
                email
                socialMedia {
                  platformName
                  url
                  icon {
                    name
                    faPackage
                    faIconName
                  }
                }
              }
            }
          }
          slug {
            current
          }
        }
      }
     }    
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  console.log('index page', data);

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const company = (data || {}).company;
  if (!company) {
    throw new Error(
      'Missing "Company Info data". Open the studio at http://localhost:3333 and add some content to "Company Info" then restart the development server.'
    );
  }

  const teamMemberNodes = (data || {}).teamMembers ? mapEdgesToNodes(data.teamMembers).filter(filterOutDocsWithoutSlugs) : [];

  const podcastNodes = (data || {}).podcasts ? mapEdgesToNodes(data.podcasts) : [];

  const blogPostNodes = (data || {}).posts ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs).map((item) => ({
    linkTo: getBlogUrl(item.publishedAt, item.slug.current),
    caption: `Blog — ${format(item.publishedAt, 'DD MMMM YYYY')}`,
    ...item
  })) : [];

  const pressReleaseNodes = (data || {}).pressReleases ? mapEdgesToNodes(data.pressReleases).map((item) => ({
    linkTo: getPressReleaseUrl(item.publishedAt, item.slug.current),
    caption: `Press Release — ${format(item.publishedAt, 'DD MMMM YYYY')}`,
    ...item
  })) : [];

  const eventNodes = (data || {}).events ? mapEdgesToNodes(data.events).filter(filterOutDocsWithoutSlugs).map((item) => ({
    linkTo: getEventUrl(item.eventAt, item.slug.current),
    caption: `Event — ${format(item.eventAt, 'DD MMMM YYYY')}`,
    ...item
  })) : [];

  const allNewsNodes = [ ...blogPostNodes, ...pressReleaseNodes, ...eventNodes ]
    .slice(0, 6);

  return (
    <Layout>
      <SEO title={data.seo.title} description={data.seo.description} keywords={data.seo.keywords} />
      <Container>
        <h1 hidden>{data.seo.title}</h1>

        {teamMemberNodes && (
          <TeamMemberPreviewGrid
            title='Our Team'
            nodes={teamMemberNodes}
            browseMoreHref='/team'
            browseMoreText='All team members'
          />
        )}

        {allNewsNodes && (
          <PreviewGrid
            title='News'
            nodes={allNewsNodes}
            browseMoreHref='/news'
            browseMoreText='All news'
          />
        )}

        {podcastNodes && (
          <Podcasts
            title='Podcast: Inside the Labyrinth'
            items={podcastNodes}
            subtitle='Available on the following platforms'
          />
        )}

      </Container>
    </Layout>
  );
};

export default IndexPage;
