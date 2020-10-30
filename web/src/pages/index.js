import React from 'react';
import { graphql } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import News from '../components/news';
import Podcasts from '../components/podcasts';
import TeamMemberPreviewGrid from '../components/team-member-preview-grid';
import BlogPostPreviewGrid from '../components/blog-post-preview-grid';
import Layout from '../containers/layout';
import { filterOutDocsWithoutSlugs, mapEdgesToNodes } from '../lib/helpers';

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
    teamMembers: allSanityTeamMember(limit: 3) {
      edges {
        node {
          id
          slug {
            current
          }
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
    posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
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
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
    news: allSanityNews {
     edges {
       node {
        source
        title
        url
       }
     }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  console.log('index', data);

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
      'Missing "Company info". Open the studio at http://localhost:3333 and add some content to "Company info" and restart the development server.'
    );
  }

  const teamMemberNodes = (data || {}).teamMembers ? mapEdgesToNodes(data.teamMembers).filter(filterOutDocsWithoutSlugs) : [];
  const postNodes = (data || {}).posts ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs) : [];
  const newsNodes = (data || {}).news ? mapEdgesToNodes(data.news) : [];
  const podcastNodes = (data || {}).podcasts ? mapEdgesToNodes(data.podcasts) : [];

  return (
    <Layout>
      <SEO title={data.seo.title} description={data.seo.description} keywords={data.seo.keywords} />
      <Container>
        <h1 hidden>{data.seo.title}</h1>

        {teamMemberNodes && (
          <TeamMemberPreviewGrid
            title='Meet the Team'
            nodes={teamMemberNodes}
            browseMoreHref='/team'
          />
        )}

        {postNodes && (
          <BlogPostPreviewGrid
            title='Latest blog posts'
            nodes={postNodes}
            browseMoreHref='/blog/'
          />
        )}

        {newsNodes && (
          <News items={newsNodes} title='News' />
        )}

        {podcastNodes && (
          <Podcasts items={podcastNodes} title='Podcast: Inside the Labyrinth' subtitle='Available on the following platforms' />
        )}
      </Container>
    </Layout>
  );
};

export default IndexPage;
