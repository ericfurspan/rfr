import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { Container, Testimonial } from '../components';

export const query = graphql`
  query TestimonialTemplateQuery($id: String!) {
    testimonial: sanityTestimonial(id: { eq: $id }) {
      id
      text
      reviewer
      reviewedAt
      slug {
        current
      }
    }
  }
`;

const TestimonialTemplate = ({ data }) => {
  const { testimonial } = (data || {});

  return (
    <Container>
      {testimonial && <SEO title={testimonial.reviewer || 'Untitled'} />}
      {testimonial && <Testimonial {...testimonial} />}
    </Container>
  );
};

export default TestimonialTemplate;
