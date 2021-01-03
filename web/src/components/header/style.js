import styled, { css } from 'styled-components';

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;

  ${(props) => (props.path === '/' && props.headerTextColor) && css`
    ${StyledTitle} {
      color: ${props => props.headerTextColor};
    }
  `}
`;

export const StyledTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  font-family: var(--font-family-brand);
  margin-left: 75px;
  user-select: none;
  z-index: 1;

  & a {
    display: inline-block;
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledAttentionBanner = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  font-size: 0.875em;
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
