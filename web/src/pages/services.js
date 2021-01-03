import React from 'react';
import { graphql } from 'gatsby';

import { mapEdgesToNodes } from '../lib/helpers';
import SEO from '../containers/seo';
import { Container, Services, BlockContent } from '../components';

export const query = graphql`
  query ServicesPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)services/" }) {
      _rawBody(resolveReferences: { maxDepth: 4 })
      isCentered
    }
    services: allSanityService(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          title
          _rawSubtitle
          _rawBody(resolveReferences: { maxDepth: 4 })
          icon {
            name
            faPackage
            faIconName
          }
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
      <Container centered={page.isCentered}>
        <BlockContent blocks={page._rawBody || []} />
        <br /> <br />

        <Services nodes={servicesNodes} />
      </Container>
    </>
  );
};

export default ServicesPage;
