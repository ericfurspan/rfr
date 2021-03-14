import React from 'react';
import { graphql } from 'gatsby';

import { mapEdgesToNodes } from '../lib/helpers';
import SEO from '../containers/seo';
import { Box, Container, BlockContent, PreviewNodes } from '../components';

export const query = graphql`
  query SuccessStoriesQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)success-stories/" }) {
      _rawBody(resolveReferences: { maxDepth: 4 })
      isCentered
    }
    successStories: allSanitySuccessStory(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
        }
      }
    }
  }
`;

const SuccessStoriesPage = ({ data }) => {
  const page = data && data.page;
  if (!page) {
    return null;
  }

  const successStoryNodes = data.successStories && mapEdgesToNodes(data.successStories);

  return (
    <>
      <SEO title='RFR Success Stories' />
      <Container centered={page.isCentered}>

        <Box mb='3rem'>
          <BlockContent blocks={page._rawBody || []} />
        </Box>

        <PreviewNodes nodes={successStoryNodes} nodeType='successStory' />
      </Container>
    </>
  );
};

export default SuccessStoriesPage;
