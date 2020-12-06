import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { MEDIA } from '../../lib/helpers';

export const StyledJumbotron = styled.div`
  min-height: 28em;
  color: var(--color-black);
  position: relative;

  ${MEDIA.PHONE`
    min-height: 24em;
  `}

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};

  ${(props) =>
    props.hasImage &&
    css`
      ${StyledContent} {
        border-radius: 0.2em;
        background-color: var(--color-dark-white);

        ${props.backgroundColor &&
        `
        background-color: ${props.backgroundColor};
      `}
      }

      & img {
        position: absolute;
        top: 0;
        right: 0;
        /* left: 0; */
        /* width: 100%; */
        width: calc(100% - 41em); // todo: use gatsbt image for this
        height: 100%;
        vertical-align: top;
        object-fit: cover;

        ${(props) =>
    props.backgroundOpacity &&
          css`
            opacity: ${props.backgroundOpacity};
          `}
      }
    `}
`;

export const StyledContent = styled.div`
  position: absolute;
  /* top: 2rem; */
  top: 0;
  bottom: 0;
  left: 1em;
  /* right: 2rem; */
  padding: 2em;
  max-width: 36rem;

  ${MEDIA.PHONE`
    /* left: 1rem;
    right: 1rem; */
    padding: 1em;
  `}
`;

export const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledCTAButton = styled.button`
  background-color: var(--color-gray);
  color: var(--color-white);
  cursor: pointer;
  font-size: 1.125rem;
  font-weight: 700;
  text-transform: uppercase;
  min-height: 42px;
  min-width: 126px;
  padding: 0 16px;
  justify-content: center;
  border-radius: 4px;
  border: 0;
  margin-top: 1.5em;
  white-space: nowrap;
  transition: opacity 200ms linear, color 200ms linear;

  &:hover {
    opacity: 0.85;
  }

  ${(props) =>
    props.buttonSize === 'small' &&
    css`
      min-height: 42px;
      min-width: 126px;
    `};

  ${(props) =>
    props.buttonSize === 'large' &&
    css`
      min-height: 56px;
      min-width: 224px;
      font-size: 1.25rem;
    `};

  ${(props) =>
    props.buttonSize === 'xlarge' &&
    css`
      min-height: 72px;
      min-width: 248px;
      font-size: 1.35rem;
    `};

  ${(props) =>
    props.buttonTextColor &&
    css`
      color: ${props.buttonTextColor};
    `};

  ${(props) =>
    props.buttonBgColor &&
    css`
      background-color: ${props.buttonBgColor};
    `};
`;
