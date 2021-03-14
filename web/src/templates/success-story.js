import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { Container, SuccessStory } from '../components';

export const query = graphql`
  query SuccessStoryTemplateQuery($id: String!) {
    successStory: sanitySuccessStory(id: { eq: $id }) {
      id
      title
      _rawText
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
      slug {
        current
      }
    }
  }
`;

const SuccessStoryTemplate = ({ data }) => {
  const { successStory } = (data || {});

  return (
    <Container>
      {successStory && <SEO title={successStory.title || 'Untitled Success Story'} />}
      {successStory && <SuccessStory {...successStory} />}
    </Container>
  );
};

export default SuccessStoryTemplate;
