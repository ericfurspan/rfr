import React from 'react';
import { graphql } from 'gatsby';

import { mapEdgesToNodes } from '../lib/helpers';
import SEO from '../containers/seo';
import { Container, ServicesGrid, BlockContent } from '../components';

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
  const { data } = props;

  const page = data && data.page;

  if (!page) {
    throw new Error(
      'Missing "Services" page data. Open the studio at http://localhost:3333 and add "Services" page data then restart the development server.'
    );
  }

  const servicesNodes = (data || {}).services ? mapEdgesToNodes(data.services) : [];

  return (
    <>
      <SEO title='Services' />
      <Container>
        <BlockContent blocks={page._rawBody || []} />
        <ServicesGrid nodes={servicesNodes} />
      </Container>
    </>
  );
};

export default ServicesPage;
