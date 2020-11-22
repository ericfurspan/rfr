import React from 'react';
import { graphql } from 'gatsby';
import { format } from 'date-fns';

import { filterOutDocsWithoutSlugs, getBlogUrl, getEventUrl, getPressReleaseUrl, mapEdgesToNodes } from '../lib/helpers';
import SEO from '../containers/seo';
import { Container, Jumbotron, PreviewGrid, ServicesGrid, Podcast } from '../components';

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
      contact {
        email
        socialMedia {
          linkText
          url
          icon {
            name
            faPackage
            faIconName
          }
        }
      }
    }
    services: allSanityService {
      edges {
        node {
          id
          title
          _rawSubtitle
        }
      }
    }
    podcasts: allSanityPodcast {
      edges {
        node {
          id
          title
          _rawDescription
          availablePlatforms {
            linkText
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
                linkText
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
                  linkText
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
  const { data } = props;

  const company = (data || {}).company;
  if (!company) {
    throw new Error(
      'Missing "Company Info". Open the studio at http://localhost:3333 and add some content to "Company Info" then restart the development server.'
    );
  }

  const servicesNodes = (data || {}).services ? mapEdgesToNodes(data.services) : [];
  const podcastNodes = (data || {}).podcasts ? mapEdgesToNodes(data.podcasts) : [];
  const teamMemberNodes = (data || {}).teamMembers ? mapEdgesToNodes(data.teamMembers).filter(filterOutDocsWithoutSlugs) : [];
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
  const allNewsNodes = [ ...blogPostNodes, ...pressReleaseNodes, ...eventNodes ].slice(0, 6);

  return (
    <>
      <SEO title={data.seo.title} description={data.seo.description} keywords={data.seo.keywords} />
      <Container>
        <h1 hidden>{data.seo.title}</h1>

        {/* todo: HERO BANNER */}
        <Jumbotron title='Banner' subtitle='Some content here' />

        {servicesNodes && (
          <ServicesGrid
            nodes={servicesNodes}
            browseMoreHref='/services'
            browseMoreText='Learn more about what we do'
            previewOnly
          />
        )}

        {/* todo: REVIEWS PREVIEW */}

        {teamMemberNodes && (
          <PreviewGrid
            title='Our Team'
            nodes={teamMemberNodes}
            nodeType='teamMember'
            browseMoreHref='/team'
            browseMoreText='See all team members'
          />
        )}

        {allNewsNodes && (
          <PreviewGrid
            title='News'
            nodes={allNewsNodes}
            nodeType='default'
            browseMoreHref='/news'
            browseMoreText='See all news &amp; events'
          />
        )}

        {podcastNodes.map((podcast) => (
          <Podcast key={podcast.id} {...podcast} />
        ))}
      </Container>
    </>
  );
};

export default IndexPage;
