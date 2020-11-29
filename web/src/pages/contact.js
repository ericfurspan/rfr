import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { Container, BlockContent, ContactForm } from '../components';

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
      _rawBody(resolveReferences: { maxDepth: 4 })
    }
  }
`;

const ContactPage = ({ data }) => {
  const page = data && data.page;

  if (!page) {
    throw new Error(
      'Missing "Contact" page data. Open the studio and add "Contact" page data then restart the development server.'
    );
  }

  return (
    <>
      <SEO title='Contact' />
      <Container>
        <BlockContent blocks={page._rawBody || []} />
        <br /><br />
        <ContactForm />
      </Container>
    </>
  );
};

export default ContactPage;
