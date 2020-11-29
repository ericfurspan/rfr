import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { PressPost } from '../components';

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

const PressReleaseTemplate = (props) => {
  const { data } = props;
  const pressRelease = data && data.pressRelease;

  return (
    <>
      {pressRelease && <SEO title={pressRelease.title || 'Untitled'} />}
      {pressRelease && <PressPost {...pressRelease} />}
    </>
  );
};

export default PressReleaseTemplate;
