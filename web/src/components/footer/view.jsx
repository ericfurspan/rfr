import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitalize } from '../../lib/string-utils';

import { Logo } from '..';
import {
  StyledFooter,
  StyledGrid,
  StyledSectionHeading,
  StyledBrandSection,
  StyledSocialMediaSection,
  StyledSiteMapSection,
  StyledNewsletterSection
} from './style';

const Footer = ({ siteTitle, siteLogo, contactInfo, allPages }) => {
  return (
    <StyledFooter>
      <StyledGrid>
        <StyledBrandSection>
          <StyledSectionHeading>
            {(siteLogo && siteLogo.asset) && <Logo image={siteLogo} width={35} height={35} />}
            {siteTitle}
          </StyledSectionHeading>
        </StyledBrandSection>
        <StyledSiteMapSection>
          <StyledSectionHeading>Our Site</StyledSectionHeading>
          <ul>
            {allPages.map((page, index) => (
              <li key={`${page}-${index}`}>
                <Link to={`/${page}`}>{capitalize(page)}</Link>
              </li>
            ))}
          </ul>
        </StyledSiteMapSection>
        <StyledSocialMediaSection>
          <StyledSectionHeading>Follow Us</StyledSectionHeading>
          {contactInfo.socialMedia.map((platform) => (
            <a href={platform.url} key={platform.url} target='_blank' rel='noreferrer noopener'>
              <FontAwesomeIcon icon={[platform.icon.faPackage, platform.icon.faIconName]} fixedWidth />
              <span>{platform.linkText}</span>
            </a>
          ))}
        </StyledSocialMediaSection>
        <StyledNewsletterSection>
          <StyledSectionHeading>Subscribe to our newsletter</StyledSectionHeading>
          <form onSubmit={({ target }) => console.log('submitted newsletter form', target)}>
            <input
              type='text'
              placeholder='Your email'
              aria-label='Email'
            />
            <input type='submit' required value='Subscribe' />
          </form>
        </StyledNewsletterSection>
      </StyledGrid>
    </StyledFooter>
  );
};

export default Footer;
