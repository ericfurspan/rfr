import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { Container, BlockContent, ContactForm, Box, Typography } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
      _rawBody(resolveReferences: { maxDepth: 4 })
      isCentered
    }
    company: sanityCompanyInfo(_id: { regex: "/(drafts.|)companyInfo/" }) {
      contact {
        email
        socialMedia {
          linkText
          url
          icon {
            name
            faPackage
            faIconName
          }
        }
      }
      faq {
        _key
        question
        answer
      }
    }
  }
`;

const ContactPage = ({ data }) => {
  const { page, company } = (data || {});

  if (!page) {
    return null;
  }

  return (
    <>
      <SEO title='Contact' />
      <Container centered={page.isCentered}>

        <Box mb='3em'>
          <BlockContent blocks={page._rawBody || []} />
        </Box>

        <ContactForm />

        <Box d='grid' gridResponsive gtc='repeat(auto-fit, minmax(0, 1fr))' m='4em 0' gcg='2em' grg='4em'>
          <Box m='2em'>
            <Box d='inline-block' m='0 1em' p='0.65em' bdr='100%' br='var(--color-black)'>
              <a href={`mailto:${company.contact.email}`}>
                <FontAwesomeIcon
                  icon={['fas', 'envelope']}
                  color='var(--color-white)'
                  size='lg'
                  fixedWidth
                />
              </a>
            </Box>
            {company.contact.socialMedia.map((platform) => (
              <Box d='inline-block' m='0 1em' p='0.5em' bdr='6px' br='var(--color-dark-gray)' key={platform.url}>
                <a href={platform.url} target='_blank' rel='noreferrer noopener'>
                  <FontAwesomeIcon
                    icon={[platform.icon.faPackage, platform.icon.faIconName]}
                    color='var(--color-white)'
                    size='lg'
                    fixedWidth
                  />
                </a>
              </Box>
            ))}
          </Box>
        </Box>

        {company.faq.length > 0 && (
          <Box maxw='550px' ta='initial' m='0 auto'>
            <h2 css={Typography.responsiveTitle2}>Frequently Asked Questions</h2>
            <Box flex col ai='flex-start'>
              {company.faq.map((faqItem) => (
                <Box m='0.5em 0' key={faqItem._key}>
                  <details>
                    <summary>{faqItem.question}</summary>
                    <em><p css={Typography.base}>{faqItem.answer}</p></em>
                  </details>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
};

export default ContactPage;
