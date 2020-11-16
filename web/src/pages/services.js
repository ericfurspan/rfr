import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '../components/block-content';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import { mapEdgesToNodes } from '../lib/helpers';
import ServicesGrid from '../components/service/grid';

export const query = graphql`
  query ServicesPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)services/" }) {
      _rawBody
    }
    services: allSanityService(sort: { fields: [priority], order: ASC }) {
      edges {
        node {
          id
          title
          _rawSubtitle
          _rawBody
        }
      }
    }
  }
`;

const ServicesPage = props => {
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
      'Missing "Services" page data. Open the studio at http://localhost:3333 and add "Services" page data then restart the development server.'
    );
  }

  const servicesNodes = (data || {}).services ? mapEdgesToNodes(data.services) : [];

  return (
    <Layout>
      <SEO title='Services' />
      <Container>
        <BlockContent blocks={page._rawBody || []} />
        <ServicesGrid nodes={servicesNodes} />
      </Container>
    </Layout>
  );
};

export default ServicesPage;
