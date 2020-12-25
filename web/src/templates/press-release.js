import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { Container, PressPost } from '../components';

export const query = graphql`
  query PressReleaseTemplateQuery($id: String!) {
    pressRelease: sanityPressRelease(id: { eq: $id }) {
      id
      title
      source
      url
      _rawExcerpt
      publishedAt
      slug {
        current
      }
    }
  }
`;

const PressReleaseTemplate = ({ data }) => {
  const { pressRelease } = (data || {});

  return (
    <Container noPadding>
      {pressRelease && <SEO title={pressRelease.title || 'Untitled'} />}
      {pressRelease && <PressPost {...pressRelease} />}
    </Container>
  );
};

export default PressReleaseTemplate;
