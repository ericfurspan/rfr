import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { Box, BlogPost, Container } from '../components';

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      title
      slug {
        current
      }
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
      _rawBody
      authors {
        _id
        slug {
          current
        }
        person {
          name
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
`;

const BlogPostTemplate = ({ data }) => {
  const { post } = (data || {});

  return (
    <Container noPadding>
      {post && <SEO title={post.title || 'Untitled Blog Post'} />}
      {post && (
        <Box mt='6em'>
          <BlogPost {...post} />
        </Box>
      )}
    </Container>
  );
};

export default BlogPostTemplate;
