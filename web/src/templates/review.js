import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { Review } from '../components';

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

const ReviewTemplate = (props) => {
  const { data } = props;
  const review = data && data.review;

  return (
    <>
      {review && <SEO title={review.reviewer || 'Untitled'} />}
      {review && <Review {...review} />}
    </>
  );
};

export default ReviewTemplate;
