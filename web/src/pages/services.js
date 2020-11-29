import React from 'react';
import { graphql } from 'gatsby';

import { mapEdgesToNodes } from '../lib/helpers';
import SEO from '../containers/seo';
import { Container, ServicesGrid, BlockContent } from '../components';

export const query = graphql`
  query ServicesPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)services/" }) {
      _rawBody(resolveReferences: { maxDepth: 4 })
    }
    services: allSanityService(sort: { fields: [priority], order: ASC }) {
      edges {
        node {
          id
          title
          _rawSubtitle
          _rawBody(resolveReferences: { maxDepth: 4 })
        }
      }
    }
  }
`;

const ServicesPage = ({ data }) => {
  const page = data && data.page;

  if (!page) {
    throw new Error(
      'Missing "Services" page data. Open the studio and add "Services" page data then restart the development server.'
    );
  }

  const servicesNodes = (data || {}).services ? mapEdgesToNodes(data.services) : [];

  return (
    <>
      <SEO title='Services' />
      <Container>
        <BlockContent blocks={page._rawBody || []} />
        <br /> <br />
        <ServicesGrid nodes={servicesNodes} />
      </Container>
    </>
  );
};

export default ServicesPage;
