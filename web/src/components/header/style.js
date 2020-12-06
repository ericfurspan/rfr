import styled, { css } from 'styled-components';
import { MEDIA } from '../../lib/helpers';

export const StyledHeader = styled.header`
  position: relative;
  z-index: 100;
  padding-bottom: 2em;
  
  ${props => props.headerBgColor && css`
    background-color: ${props.headerBgColor};
  `}
`;

export const StyledAttentionBanner = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  font-size: 0.75em;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-very-light-gray);
  color: var(--color-black);

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};
`;

export const StyledContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1400px;
  padding: 2em 1em 0;
`;

export const StyledTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: var(--font-family-brand);
  margin: auto 0.75rem;
  flex: 1;

  & a {
    display: inline-block;
    color: inherit;
    color: ${props => props.headerTextColor || 'inherit'};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledMenuBtn = styled.button`
  appearance: none;
  font-size: 24px;
  height: max-content;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  outline: none;
  z-index: 1;
  color: ${props => props.headerTextColor || 'inherit'};

  ${MEDIA.MIN_TABLET`
    display: none;
  `};
`;

export const StyledNav = styled.nav`
  display: none;

  & ul {
    margin: 0;
    padding: 0;
  }

  & ul li a {
    display: block;
    color: ${props => props.headerTextColor || 'inherit'};
    text-decoration: none;
    font-size: 1rem;
  }

  & ul li a:hover {
    text-decoration: underline;
  }

  ${MEDIA.TABLET`
    position: absolute;
    background: ${props => props.headerBgColor || 'var(--color-white)'};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    left: 0;
    right: 0;
    top: 4rem;

    & ul {
      padding: 2rem 0 1rem;
    }

    & ul li a {
      padding: 0.75rem 1.5rem;
    }
  `};

  ${MEDIA.MIN_TABLET`
    display: block;

    & ul {
      list-style: none;
      display: flex;
      justify-content: flex-end;
    }

    & ul li a {
      padding: 0.5rem 0.75rem;
    }
  `}

  ${(props) =>
    props.showNav &&
    css`
      display: block;
    `}
`;
