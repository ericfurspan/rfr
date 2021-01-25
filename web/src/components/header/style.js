import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  ${(props) => (props.currentPath === '/' && props.headerTextColor) && css`
    ${StyledTitle} {
      color: ${props => props.headerTextColor};
    }
  `}

  ${(props) => props.hasBanner && css`
    ${StyledTitle} {
      margin-top: 90px;
    }
    .nav-toggle {
      margin-top: 75px;
    }
  `}
`;

export const StyledTitle = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
  font-family: var(--font-family-brand);
  user-select: none;
  padding-left: 18px;
  margin-top: 16px;
  max-width: calc(100vw - 100px);
  z-index: 1;

  & a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    margin-left: 0.75em;
  }
`;

export const StyledAttentionBanner = styled.div`
  width: calc(100% - 2em);
  position: fixed;
  top: 0;
  z-index: 3;
  font-size: 0.875em;
  /* max-height: 50px; */
  padding: 1.25em 1em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-very-light-gray);
  color: var(--color-black);

  ${(props) =>
    props.bannerBackgroundColor &&
    css`
      background-color: ${props.bannerBackgroundColor};
    `};

  div:first-child {
    max-width: calc(100% - 4em);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: auto;
  }

  .banner-dismiss {
    cursor: pointer;
    position: absolute;
    right: 1em;
    font-size: 1.25em;
    color: inherit;
  }
`;
