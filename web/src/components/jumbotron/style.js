import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { StyledButton } from '../field';

export const StyledJumbotron = styled.div`
  height: 100vh;
  color: var(--color-black);
  position: relative;

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};

  ${(props) =>
    props.hasBgImage &&
    css`
      & img.jumbo-bg {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        vertical-align: top;
        object-fit: cover;

      ${(props) => props.backgroundOpacity &&
        css`
          opacity: ${props.backgroundOpacity};
      `}
      }

      ${StyledOverlay} {
        background-color: rgba(0,0,0,0.4);
      }
    `}
`;

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2em;
`;

export const StyledContent = styled.div`
  max-width: 36rem;
  position: relative;
  top: 20%;
  transform: translateY(-20%);

  ${(props) => props.isCentered && css`
    top: 40%; 
    transform: translateY(-40%);
    text-align: center;
    max-width: unset;
  `}
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 2em;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledCTAButton = styled(StyledButton)`
  text-transform: uppercase;
  font-family: var(--font-family-brand);

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
