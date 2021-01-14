import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { Box, Container, Typography, BlockContent, CoachingForm } from '../components';

export const query = graphql`
  query RecoveryCoachingPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)recovery-coaching/" }) {
      _rawBody(resolveReferences: { maxDepth: 4 })
      isCentered
    }
  }
`;

const RecoveryCoachingPage = ({ data }) => {
  const page = data && data.page;

  if (!page) {
    return null;
  }

  return (
    <>
      <SEO title='Recovery Coaching' />
      <Container centered={page.isCentered}>

        <Box mb='3em'>
          <BlockContent blocks={page._rawBody || []} />
        </Box>

        <Box flex col m='3em auto' maxw='415px'>
          <h3 css={Typography.responsiveTitle3}>Get connected with a Recovery Coach</h3>
          <CoachingForm />
        </Box>
      </Container>
    </>
  );
};

export default RecoveryCoachingPage;
