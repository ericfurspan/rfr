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
  StyledNav,
} from './style';

const Header = ({ onHideNav, onShowNav, showNav, allPages = [], companyProps, bannerProps, jumbotronProps, ...layoutProps }) => {
  const { logo, companyName } = companyProps;

  return (
    <StyledHeader showNav={showNav} {...jumbotronProps} {...layoutProps}>
      {bannerProps && bannerProps._rawBannerText && (
        <StyledAttentionBanner {...bannerProps}>
          <BlockContent blocks={bannerProps._rawBannerText} />
        </StyledAttentionBanner>
      )}

      <StyledContainer>
        {(logo && logo.asset) && <Logo image={logo} />}
        <StyledTitle>
          <Link to='/'>{companyName}</Link>
        </StyledTitle>

        <StyledMenuBtn onClick={showNav ? onHideNav : onShowNav} aria-label='Navigation menu'>
          <FontAwesomeIcon icon={showNav ? 'times' : 'bars'} fixedWidth />
        </StyledMenuBtn>

        <StyledNav showNav={showNav} {...jumbotronProps} {...layoutProps}>
          <ul>
            <li onClick={onHideNav}>
              <Link to='/'>Home</Link>
            </li>
            {allPages.map((page, index) => (
              <li key={`${page}-${index}`} onClick={onHideNav}>
                <Link to={`/${page}`}>{capitalize(page)}</Link>
              </li>
            ))}
          </ul>
        </StyledNav>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
