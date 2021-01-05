import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const AnimatedBackground = motion.div;
export const AnimatedStyledBackground = styled(AnimatedBackground)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background-color: ${(props) => props.navMenuBg || 'var(--color-white)'};
`;

const AnimatedNav = motion.nav;
export const AnimatedStyledNav = styled(AnimatedNav)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100px;
  z-index: 1;

  ${(props) => props.isOpen && css`
    z-index: 3;
    position: fixed;
    width: 300px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  `}

  .nav-title {
    position: absolute;
    top: 22px;
    right: 15px;
    color: ${(props) => props.navMenuFg || 'var(--color-black)'};
    font-size: 1.25rem;
    font-weight: 600;
    font-family: var(--font-family-brand);
    display: none;

    ${(props) => props.isOpen && css`
      display: inline;
    `}
  }

  button {
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    cursor: pointer;
    position: absolute;
    top: 22px;
    left: 20px;
    width: 40px;
    height: 40px;
    background: transparent;
    border-radius: 50%;
  
    & svg {
      vertical-align: middle;
    }
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 25px;
    position: absolute;
    top: 85px;
    width: calc(100% - 50px);
    user-select: none;
    pointer-events: none;

    ${(props) => props.isOpen && css`
      user-select: initial;
      pointer-events: initial;
    `}

    a {
      text-decoration: none !important;

      li {
        list-style: none;
        margin-bottom: 16px;
        height: 40px;
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
        pointer-events: none;

        span {
          border-radius: 6px;
          width: 100%;
          color: ${(props) => props.navMenuFg || 'var(--color-black)'};
          text-transform: uppercase;
          font-weight: 600;
          font-size: 0.875rem;
        }
      }
    }
  }
`;