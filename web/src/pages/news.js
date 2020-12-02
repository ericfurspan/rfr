import React from 'react';
import { graphql } from 'gatsby';
import { format } from 'date-fns';

import { getBlogUrl, getPressReleaseUrl, getEventUrl, mapEdgesToNodes } from '../lib/helpers';
import SEO from '../containers/seo';
import { Container, PreviewGrid, BlockContent, NewsletterForm, Typography, Box } from '../components';

export const query = graphql`
  query NewsQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)news/" }) {
      _rawBody(resolveReferences: { maxDepth: 4 })
    }
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

const NewsPage = ({ data }) => {
  const page = data && data.page;

  if (!page) {
    throw new Error(
      'Missing "News" page data. Open the studio and add "News" page data then restart the development server.'
    );
  }

  const blogPostNodes =
    data &&
    data.blogPosts &&
    mapEdgesToNodes(data.blogPosts).map((item) => ({
      linkTo: getBlogUrl(item.publishedAt, item.slug.current),
      caption: `Blog — ${format(item.publishedAt, 'DD MMMM YYYY')}`,
      ...item,
    }));

  const pressReleaseNodes =
    data &&
    data.pressReleases &&
    mapEdgesToNodes(data.pressReleases).map((item) => ({
      linkTo: getPressReleaseUrl(item.publishedAt, item.slug.current),
      caption: `Press — ${format(item.publishedAt, 'DD MMMM YYYY')}`,
      ...item,
    }));

  const eventNodes =
    data &&
    data.events &&
    mapEdgesToNodes(data.events).map((item) => ({
      linkTo: getEventUrl(item.eventAt, item.slug.current),
      caption: `Event — ${format(item.eventAt, 'DD MMMM YYYY')}`,
      ...item,
    }));

  return (
    <>
      <SEO title='News' />
      <Container>
        <BlockContent blocks={page._rawBody || []} />
        <br /> <br />
        <Box flex col mb='3em'>
          <span css={Typography.responsiveTitle3}>Subscribe to our newsletter</span>
          <NewsletterForm />
        </Box>
        <PreviewGrid title='Press Releases' nodes={pressReleaseNodes} withStyledTitle />
        <PreviewGrid title='Blog Posts' nodes={blogPostNodes} withStyledTitle />
        <PreviewGrid title='Events' nodes={eventNodes} withStyledTitle />
      </Container>
    </>
  );
};

export default NewsPage;
