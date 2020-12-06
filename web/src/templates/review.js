import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { Container, Review } from '../components';

export const query = graphql`
  query ReviewTemplateQuery($id: String!) {
    review: sanityReview(id: { eq: $id }) {
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

const ReviewTemplate = ({ data }) => {
  const { review } = (data || {});

  return (
    <Container>
      {review && <SEO title={review.reviewer || 'Untitled'} />}
      {review && <Review {...review} />}
    </Container>
  );
};

export default ReviewTemplate;
