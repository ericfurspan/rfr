import React from 'react';
import { graphql } from 'gatsby';
import { format } from 'date-fns';

import { getBlogUrl, getPressReleaseUrl, getEventUrl, mapEdgesToNodes } from '../lib/helpers';
import SEO from '../containers/seo';
import {
  Container,
  BlockContent,
  NewsletterForm,
  Typography,
  Box,
  ContentPreview,
} from '../components';

export const query = graphql`
  query NewsQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)news/" }) {
      _rawBody(resolveReferences: { maxDepth: 4 })
      isCentered
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
    return null;
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
      <Container centered={page.isCentered}>
        <BlockContent blocks={page._rawBody || []} />

        <Box flex col ai='center' mb='3em' mt='3em'>
          <h3 css={Typography.responsiveTitle3}>Subscribe to our newsletter</h3>
          <NewsletterForm />
        </Box>

        {pressReleaseNodes.length > 0 && (
          <Box mt='3em' ta='left'>
            <h2 css={Typography.responsiveTitle2}>Press</h2>
            {pressReleaseNodes.map((node) => (
              <ContentPreview key={node.id} {...node} />
            ))}
          </Box>
        )}

        {blogPostNodes.length > 0 && (
          <Box mt='3em' ta='left'>
            <h2 css={Typography.responsiveTitle2}>Blog</h2>
            {blogPostNodes.map((node) => (
              <ContentPreview key={node.id} {...node} />
            ))}
          </Box>
        )}

        {eventNodes.length > 0 && (
          <Box mt='3em' ta='left'>
            <h2 css={Typography.responsiveTitle2}>Events</h2>
            {eventNodes.map((node) => (
              <ContentPreview key={node.id} {...node} />
            ))}
          </Box>
        )}

      </Container>
    </>
  );
};

export default NewsPage;
