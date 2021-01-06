import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Logo } from '../logo';

export const AnimatedLogo = motion.custom(Logo);

export const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 2;

  button {
    outline: none;
    border: none;
    padding: 0;
    user-select: none;
    cursor: pointer;
    position: ${(props) => props.isOpen ? 'fixed' : 'absolute'};
    top: 15px;
    right: 16px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${(props) => props.navMenuBg || 'transparent'};

    ${(props) => props.currentPath === '/' && css`
      background: transparent;
    `}

    & svg {
      font-size: 2em;
      color: ${(props) => props.navMenuFg || 'var(--color-black)'};

      ${(props) => props.currentPath === '/' && css`
        color: var(--color-white);

        ${props.isOpen && css`
          color: ${(props) => props.navMenuFg || 'var(--color-black)'};
        `}
      `}
    }
  }
`;

const AnimatedNav = motion.nav;
export const AnimatedStyledNav = styled(AnimatedNav)`
  position: ${(props) => props.isOpen ? 'fixed' : 'absolute'};
  top: 0;
  bottom: 0;
  width: 280px;
  background-color: ${(props) => props.navMenuBg || 'var(--color-white)'};
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.35);
  overflow-y: auto;

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 24px;
    position: absolute;
    top: 70px;
    width: calc(100% - 48px);

    a {
      display: block;
      position: relative;
      text-decoration: none !important;
      margin-left: 0.5em;

      li {
        list-style: none;
        margin-bottom: 16px;
        height: 40px;
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
        border-radius: 6px;
        width: 100%;
        color: ${(props) => props.navMenuFg || 'var(--color-black)'};
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1rem;

        & svg {
          position: absolute;
          right: 0;
          color: inherit;
          font-size: 1em;
        }
      }
    }
  }
`;
