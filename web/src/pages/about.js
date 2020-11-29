import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { Container, BlockContent } from '../components';

export const query = graphql`
  query AboutPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      _rawBody(resolveReferences: { maxDepth: 4 })
    }
  }
`;

const AboutPage = ({ data }) => {
  const page = data && data.page;

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio and add "About" page data then restart the development server.'
    );
  }

  return (
    <>
      <SEO title='About' />
      <Container>
        <BlockContent blocks={page._rawBody || []} />
      </Container>
    </>
  );
};

export default AboutPage;
