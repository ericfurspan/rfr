import React from 'react';
import { graphql } from 'gatsby';
import { format } from 'date-fns';
import { getBlogUrl, getPressReleaseUrl, getEventUrl, mapEdgesToNodes } from '../lib/helpers';
import PreviewGrid from '../components/preview/grid';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';

import { responsiveTitle1 } from '../components/typography.module.css';

export const query = graphql`
  query PublishedContentQuery {
    blogPosts: allSanityPost(sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          title
          publishedAt
          coverPhoto {
            asset {
              _id
            }
          }
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
          title
          publishedAt
          source
          url
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

const PublishedContentPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const blogPostNodes = data && data.blogPosts && (
    mapEdgesToNodes(data.blogPosts)
      .map((item) => ({
        linkTo: getBlogUrl(item.publishedAt, item.slug.current),
        caption: `Blog — ${format(item.publishedAt, 'DD MMMM YYYY')}`,
        ...item
      }))
  );

  const pressReleaseNodes = data && data.pressReleases && (
    mapEdgesToNodes(data.pressReleases)
      .map((item) => ({
        linkTo: getPressReleaseUrl(item.publishedAt, item.slug.current),
        caption: `Press — ${format(item.publishedAt, 'DD MMMM YYYY')}`,
        ...item
      }))
  );

  const eventNodes = data && data.events && (
    mapEdgesToNodes(data.events)
      .map((item) => ({
        linkTo: getEventUrl(item.eventAt, item.slug.current),
        caption: `Event — ${format(item.eventAt, 'DD MMMM YYYY')}`,
        ...item
      }))
  );

  return (
    <Layout>
      <SEO title='News &amp; Events' />
      <Container>
        <h1 className={responsiveTitle1}>News &amp; Events</h1>
        {pressReleaseNodes && pressReleaseNodes.length > 0 && (
          <PreviewGrid title='Press Releases' nodes={pressReleaseNodes} withStyledTitle />
        )}

        {blogPostNodes && blogPostNodes.length > 0 && (
          <PreviewGrid title='Blog Posts' nodes={blogPostNodes} withStyledTitle />
        )}

        {eventNodes && eventNodes.length > 0 && (
          <PreviewGrid title='Events' nodes={eventNodes} withStyledTitle />
        )}
      </Container>
    </Layout>
  );
};

export default PublishedContentPage;
