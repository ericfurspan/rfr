import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

export const StyledJumbotron = styled.div`
  min-height: 30em;
  background-color: var(--color-very-light-gray);
  color: var(--color-black);
  border-radius: 0.2em;
  position: relative;

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor.hex};
      padding: 2em;
    `};

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    vertical-align: top;
    object-fit: cover;

    ${(props) =>
    props.backgroundOpacity &&
      css`
        opacity: ${props.backgroundOpacity};
      `}
  }
`;

export const StyledContent = styled.div`
  position: absolute;
  top: 5em;
  left: 5em;
  max-width: 38rem;
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
  font-size: 1rem;
  font-weight: 500;
  min-height: 42px;
  min-width: 126px;
  padding: 0 16px;
  justify-content: center;
  border-radius: 4px;
  border: 0;
  margin-top: 1em;
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
    `};

  ${(props) =>
    props.buttonTextColor &&
    css`
      color: ${props.buttonTextColor.hex};
    `};

  ${(props) =>
    props.buttonBgColor &&
    css`
      background-color: ${props.buttonBgColor.hex};
    `};
`;
