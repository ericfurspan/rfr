import React from 'react';
import { graphql } from 'gatsby';

import { getTestimonialUrl, mapEdgesToNodes } from '../lib/helpers';
import SEO from '../containers/seo';
import { Container, PreviewGrid, BlockContent } from '../components';
import { format } from 'date-fns';

export const query = graphql`
  query TestimonialsQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)testimonials/" }) {
      _rawBody(resolveReferences: { maxDepth: 4 })
      isCentered
    }
    testimonials: allSanityTestimonial {
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

const TestimonialsPage = ({ data }) => {
  const page = data && data.page;

  if (!page) {
    throw new Error(
      'Missing "Testimonials" page data. Open the studio and add "Testimonials" page data then restart the development server.'
    );
  }

  const testimonialNodes =
    data &&
    data.testimonials &&
    mapEdgesToNodes(data.testimonials).map((item) => ({
      ...item,
      linkTo: getTestimonialUrl(item.reviewedAt, item.slug.current),
      title: `Testimonial by ${item.reviewer}`,
      text: item.text,
      caption: format(item.reviewedAt, 'DD MMMM YYYY'),
    }));

  return (
    <>
      <SEO title='Testimonials' />
      <Container centered={page.isCentered}>
        <BlockContent blocks={page._rawBody || []} />
        <br /> <br />

        <PreviewGrid nodes={testimonialNodes} nodeType='testimonial' />
      </Container>
    </>
  );
};

export default TestimonialsPage;
