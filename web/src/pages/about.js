import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { Container, BlockContent } from '../components';

export const query = graphql`
  query AboutPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      _rawBody(resolveReferences: { maxDepth: 4 })
      isCentered
    }
  }
`;

const AboutPage = ({ data }) => {
  const page = data && data.page;

  if (!page) {
    return null;
  }

  return (
    <>
      <SEO title='About' />
      <Container centered={page.isCentered}>
        <BlockContent blocks={page._rawBody || []} />
      </Container>
    </>
  );
};

export default AboutPage;
