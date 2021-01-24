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
    ${StyledTitle}, #navigation {
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
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 2;
  font-size: 0.875em;
  max-height: 40px;
  padding: 1em;
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
`;
