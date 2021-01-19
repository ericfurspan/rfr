import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { Container, Product } from '../components';

export const query = graphql`
  query ProductTemplateQuery($id: String!) {
    product: sanityProduct(id: { eq: $id }) {
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
`;

const ProductTemplate = ({ data }) => {
  const { product } = (data || {});

  return (
    <Container>
      {product && <SEO title={product.title || 'Untitled'} />}
      {product && <Product {...product} />}
    </Container>
  );
};

export default ProductTemplate;
