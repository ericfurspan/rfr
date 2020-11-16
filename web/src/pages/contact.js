import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '../components/block-content';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
      _rawBody
    }
  }
`;

const ContactPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = data && data.page;

  if (!page) {
    throw new Error(
      'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "Contact" page data then restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title='Contact' />
      <Container>
        <BlockContent blocks={page._rawBody || []} />
      </Container>
    </Layout>
  );
};

export default ContactPage;
