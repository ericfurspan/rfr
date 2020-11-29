import styled, { css } from 'styled-components';
import { MEDIA } from '../../lib/helpers';

export const StyledHeader = styled.header`
  position: relative;
  z-index: 100;
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
      background-color: ${props.backgroundColor.hex};
    `};
`;

export const StyledContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1400px;
  padding: 2em 1em;
  display: flex;
`;

export const StyledTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  margin: auto 0.75rem;
  flex: 1;

  & a {
    display: inline-block;
    color: inherit;
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
    color: inherit;
    text-decoration: none;
  }

  & ul li a:hover {
    text-decoration: underline;
  }

  ${MEDIA.TABLET`
    position: absolute;
    background: var(--color-white);
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
      padding: 0.5rem;
    }
  `}

  ${(props) =>
    props.showNav &&
    css`
      display: block;
    `}
`;
