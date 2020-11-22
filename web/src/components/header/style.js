import styled from 'styled-components';
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
  background-color: var(--color-dark-white);
`;

export const StyledContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1200px;
  padding: 1em;
  display: flex;

  ${MEDIA.MIN_PHONE`
    padding: 1.5em 1.5em;
  `};
`;

export const StyledTitle = styled.h1`
  font-size: 1.25rem;
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
  ${props => props.showNav && `
    display: block;
  `}

  appearance: none;
  font-size: 25px;
  border: none;
  background: none;
  margin: 0;
  padding: calc(14 / 17 / 2 * 1rem);
  outline: none;

  & svg {
    display: block;
  }

  ${MEDIA.MIN_PHONE`
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

  ${MEDIA.PHONE`
    position: absolute;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    left: 0;
    right: 0;
    top: 4rem;

    & ul {
      padding: 1rem 0;
    }

    & ul li a {
      padding: 0.5rem 1.5rem;
    }
  `};

  ${MEDIA.MIN_PHONE`
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
`;
