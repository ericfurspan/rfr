import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitalize } from '../../lib/string-utils';
import { BlockContent, Logo } from '..';

import {
  StyledHeader,
  StyledAttentionBanner,
  StyledContainer,
  StyledTitle,
  StyledMenuBtn,
  StyledNav
} from './style';

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, siteLogo, siteBannerBlocks, allPages = [] }) => (
  <StyledHeader>
    {siteBannerBlocks && (
      <StyledAttentionBanner>
        <BlockContent blocks={siteBannerBlocks} />
      </StyledAttentionBanner>
    )}

    <StyledContainer>
      {(siteLogo && siteLogo.asset) && <Logo image={siteLogo} />}
      <StyledTitle>
        <Link to='/'>{siteTitle}</Link>
      </StyledTitle>

      <StyledMenuBtn onClick={showNav ? onHideNav : onShowNav} aria-label='Navigation menu'>
        <FontAwesomeIcon icon='bars' />
      </StyledMenuBtn>

      <StyledNav showNav={showNav}>
        <ul>
          {allPages.map((page, index) => (
            <li key={`${page}-${index}`}>
              <Link to={`/${page}`}>{capitalize(page)}</Link>
            </li>
          ))}
        </ul>
      </StyledNav>
    </StyledContainer>
  </StyledHeader>
);

export default Header;
