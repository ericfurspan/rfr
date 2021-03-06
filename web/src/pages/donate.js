import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../containers/seo';
import { Container, BlockContent, DonateLink, Box, StyledButton, Typography } from '../components';

export const query = graphql`
  query DonatePageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)donate/" }) {
      _rawBody(resolveReferences: { maxDepth: 4 })
      isCentered
    }
    payment: sanityPayment {
      payExternal {
        _key
        linkText
        url
        icon {
          name
          faPackage
          faIconName
        }
      }
    }
  }
`;

const DonatePage = ({ data }) => {
  const { page, payment } = data || {};

  if (!page) {
    return null;
  }

  return (
    <>
      <SEO title='Donate' />
      <Container centered={page.isCentered}>

        <Box mb='3rem'>
          <BlockContent blocks={page._rawBody || []} />
        </Box>

        <Box d='grid' gridResponsive gtc='repeat(2, minmax(0, 1fr))' gg='2em'>
          {payment.payExternal.map((externalPayment) => (
            <DonateLink key={externalPayment._key} {...externalPayment} />
          ))}
        </Box>

        <Box mt='4rem'>
          <span css={Typography.title3} style={{ fontWeight: '500' }}>
            Interested in making a tax-exempt donation?
          </span>
          <br />
          <Link to='/contact'>
            <StyledButton design='text' size='large'>
              Please email us for more information
            </StyledButton>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default DonatePage;
