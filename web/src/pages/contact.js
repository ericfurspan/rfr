import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { Container, BlockContent } from '../components';

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
      _rawBody
    }
  }
`;

const ContactPage = props => {
  const { data } = props;

  const page = data && data.page;

  if (!page) {
    throw new Error(
      'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "Contact" page data then restart the development server.'
    );
  }

  return (
    <>
      <SEO title='Contact' />
      <Container>
        <BlockContent blocks={page._rawBody || []} />
      </Container>
    </>
  );
};

export default ContactPage;
