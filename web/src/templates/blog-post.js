import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { BlogPost } from '../components';

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

const BlogPostTemplate = (props) => {
  const { data } = props;
  const post = data && data.post;

  return (
    <>
      {post && <SEO title={post.title || 'Untitled'} />}
      {post && <BlogPost {...post} />}
    </>
  );
};

export default BlogPostTemplate;
