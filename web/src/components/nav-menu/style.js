import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const AnimatedBackground = motion.div;
export const AnimatedStyledBackground = styled(AnimatedBackground)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: var(--color-black);
`;

const AnimatedNav = motion.nav;
export const AnimatedStyledNav = styled(AnimatedNav)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;

  ${(props) => props.isOpen && css`
    z-index: 2;
    width: 300px;
  `}

  ${AnimatedStyledBackground} {
    ${(props) => props.isOpen && css`
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
    `}
  }

  .nav-title {
    position: absolute;
    top: 22px;
    right: 16px;
    color: var(--color-white);
    font-size: 1.35rem;
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
    top: 15px;
    left: 15px;
    width: 50px;
    height: 50px;
    background: var(--color-black);
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
        margin-bottom: 12px;
        height: 36px;
        display: flex;
        align-items: center;
        cursor: pointer;
        user-select: none;
        pointer-events: none;

        span {
          border-radius: 6px;
          width: 100%;
          color: var(--color-white);
          text-transform: uppercase;
          font-weight: 600;
          font-size: 0.875rem;
        }
      }
    }
  }
`;
