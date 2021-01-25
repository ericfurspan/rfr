import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitalize } from '../../lib/string-utils';

import { NewsletterForm, Box, StyledButton } from '..';
import {
  StyledFooter,
  StyledGrid,
  StyledSectionHeading,
  StyledSection,
  StyledCredits,
} from './style';

const Footer = ({ companyProps, allPages, footerFg, footerBg }) => {
  const { contact, companyName } = companyProps;

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledFooter footerFg={footerFg} footerBg={footerBg}>
      <Box flex jc='center' w='100%' mb='0.5em'>
        <StyledButton design='text' onClick={handleScrollTop}>
          <FontAwesomeIcon icon={['fas', 'caret-up']} size='lg' />
          Back to top
        </StyledButton>
      </Box>
      <StyledGrid>
        <StyledSection>
          <StyledSectionHeading>Sitemap</StyledSectionHeading>
          <ul>
            {allPages.map((page, index) => (
              <li key={`${page}-${index}`}>
                <Link to={`/${page}`}>{capitalize(page.replace('-', ' '))}</Link>
              </li>
            ))}
          </ul>
        </StyledSection>
        <StyledSection>
          <StyledSectionHeading>Follow Us</StyledSectionHeading>
          <ul>
            {contact.socialMedia.map((platform) => (
              <li key={platform.url}>
                <a href={platform.url} target='_blank' rel='noreferrer noopener'>
                  <FontAwesomeIcon icon={[platform.icon.faPackage, platform.icon.faIconName]} fixedWidth />
                  <span>{platform.linkText}</span>
                </a>
              </li>
            ))}
          </ul>
        </StyledSection>
        <StyledSection>
          <StyledSectionHeading>Subscribe to our newsletter</StyledSectionHeading>
          <NewsletterForm recaptchaTheme='dark' />
        </StyledSection>
      </StyledGrid>
      <hr />
      <StyledCredits>
        <div>
          <span>
            Copyright {new Date().getFullYear()} © {companyName}
          </span>
          <span>
            Website developed by {' '}
            <a href='https://www.ericfurspan.com' target='_blank' rel='noreferrer noopener'>
              Eric Furspan
            </a>
          </span>
        </div>
      </StyledCredits>
    </StyledFooter>
  );
};

export default Footer;
