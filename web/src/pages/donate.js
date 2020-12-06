import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { Container, BlockContent, DonateLink, Box } from '../components';

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
    throw new Error(
      'Missing "Donate" page data. Open the studio and add "Donate" page data then restart the development server.'
    );
  }

  return (
    <>
      <SEO title='Donate' />
      <Container centered={page.isCentered}>
        <BlockContent blocks={page._rawBody || []} />
        <br /><br />

        <Box d='grid' gridResponsive gtc='repeat(2, minmax(0, 1fr))' grg='4em' gcg='2em'>
          {payment.payExternal.map((externalPayment) => (
            <DonateLink key={externalPayment._key} {...externalPayment} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default DonatePage;
