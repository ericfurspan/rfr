import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitalize } from '../../lib/string-utils';

import { Logo, NewsletterForm } from '..';
import {
  StyledFooter,
  StyledGrid,
  StyledSectionHeading,
  StyledSection,
  StyledCredits,
} from './style';

const Footer = ({ siteTitle, siteLogo, contactInfo, allPages }) => {
  return (
    <StyledFooter>
      <StyledGrid>
        <StyledSection>
          <StyledSectionHeading>Sitemap</StyledSectionHeading>
          <ul>
            {allPages.map((page, index) => (
              <li key={`${page}-${index}`}>
                <Link to={`/${page}`}>{capitalize(page)}</Link>
              </li>
            ))}
          </ul>
        </StyledSection>
        <StyledSection>
          <StyledSectionHeading>Follow Us</StyledSectionHeading>
          <ul>
            {contactInfo.socialMedia.map((platform) => (
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
            Copyright {new Date().getFullYear()} © {siteTitle}
          </span>
          <span>
            Responsive Web Design by {' '}
            <a href='https://www.ericfurspan.com' target='_blank' rel='noreferrer noopener'>
              Eric Furspan
            </a>
          </span>
        </div>
        {(siteLogo && siteLogo.asset) && <Logo image={siteLogo} width={50} height={50} noMargin />}
      </StyledCredits>
    </StyledFooter>
  );
};

export default Footer;
