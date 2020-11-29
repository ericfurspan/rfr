import React from 'react';
import { graphql } from 'gatsby';

import { getReviewUrl, mapEdgesToNodes } from '../lib/helpers';
import SEO from '../containers/seo';
import { Container, PreviewGrid, BlockContent } from '../components';
import { format } from 'date-fns';

export const query = graphql`
  query ReviewsQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)reviews/" }) {
      _rawBody(resolveReferences: { maxDepth: 4 })
    }
    reviews: allSanityReview {
      edges {
        node {
          id
          text
          reviewer
          reviewedAt
          slug {
            current
          }
        }
      }
    }
  }
`;

const ReviewsPage = ({ data }) => {
  const page = data && data.page;

  if (!page) {
    throw new Error(
      'Missing "Reviews" page data. Open the studio and add "Reviews" page data then restart the development server.'
    );
  }

  const reviewsNodes =
    data &&
    data.reviews &&
    mapEdgesToNodes(data.reviews).map((item) => ({
      ...item,
      linkTo: getReviewUrl(item.reviewedAt, item.slug.current),
      title: `Review by ${item.reviewer}`,
      text: item.text,
      caption: format(item.reviewedAt, 'DD MMMM YYYY'),
    }));

  return (
    <>
      <SEO title='Reviews' />
      <Container>
        <BlockContent blocks={page._rawBody || []} />
        <br /> <br />
        <PreviewGrid nodes={reviewsNodes} />
      </Container>
    </>
  );
};

export default ReviewsPage;
