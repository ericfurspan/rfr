import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Logo } from '../logo';

export const AnimatedLogo = motion.custom(Logo);

export const StyledNavContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;

  & button.nav-toggle {
    outline: none;
    border: none;
    padding: 0;
    cursor: pointer;
    position: absolute;
    top: 21px;
    right: 12px;
    width: 50px;
    height: 50px;
    z-index: 2;
    border-radius: 50%;
    background: ${(props) => props.navMenuBg || 'transparent'};

    ${(props) => props.currentPath === '/' && `
      background: transparent;
    `}

    ${(props) => props.isOpen && css`
      position: fixed;
    `}

    & svg {
      font-size: 2em;
      color: ${(props) => props.navMenuFg || 'var(--color-black)'};

      ${(props) => props.currentPath === '/' && !props.isOpen && css`
        color: ${(props) => props.navMenuFg || 'var(--color-white)'};
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
  background-color: ${(props) => props.navMenuBg || 'var(--color-dark-white)'};
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.35);
  overflow-y: auto;

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 16px;
    position: absolute;
    top: 100px;
    width: calc(100% - 48px);

    li {
      list-style: none;
      margin-left: 8px;
      margin-bottom: 12px;

      a {
        height: 40px;
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
        text-decoration: none !important;
        border-radius: 6px;
        width: 100%;
        font-weight: 400;
        font-size: 1.125rem;
        color: ${(props) => props.navMenuFg || 'var(--color-black)'};
      
        & svg {
          margin-right: 1.25rem;
        }

        &[aria-current] {
          font-weight: 600;
        }
      }
    }
  }
`;
