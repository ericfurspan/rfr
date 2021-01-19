import React from 'react';
import { graphql } from 'gatsby';

import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers';
import SEO from '../containers/seo';
import { Box, Container, BlockContent, Products } from '../components';

export const query = graphql`
  query ProductsQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)merchandise/" }) {
      _rawBody(resolveReferences: { maxDepth: 4 })
      isCentered
    }
    products: allSanityProduct {
      edges {
        node {
          id
          title
          caption
          description
          price
          link
          linkText
          image {
            asset {
              _id
            }
            alt
          }
          slug {
            current
          }
        }
      }
    }
  }
`;

const ProductsPage = ({ data }) => {
  const page = data && data.page;

  if (!page) {
    return null;
  }

  const productNodes = data.products
    ? mapEdgesToNodes(data.products).filter(filterOutDocsWithoutSlugs)
    : [];

  return (
    <>
      <SEO title='Merchandise' />
      <Container centered={page.isCentered}>

        <Box mb='3em'>
          <BlockContent blocks={page._rawBody || []} />
        </Box>

        <Products nodes={productNodes} />
      </Container>
    </>
  );
};

export default ProductsPage;
