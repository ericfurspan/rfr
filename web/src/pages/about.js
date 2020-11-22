import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { Container, BlockContent } from '../components';

export const query = graphql`
  query AboutPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      _rawBody
    }
  }
`;

const AboutPage = props => {
  const { data } = props;

  const page = data && data.page;

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data then restart the development server.'
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
