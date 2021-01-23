import styled, { css } from 'styled-components';
import { Box } from '..';
import { MEDIA } from '../../lib/helpers';

export const StyledProduct = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) => props.previewMode ? css`
    padding: 1rem;
    background: var(--color-white);
    border: 1px solid var(--color-very-light-gray);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius: 6px;
    width: fit-content;
  
    ${StyledImageContainer} {
      & img, svg {
        width: 275px !important;
        height: 275px !important;
      }
    }

    ${StyledDescription}, ${StyledProductLink} {
      display: none;
    }

    ${StyledCaption} {
      border: 0;
      padding-bottom: unset;
    }
  ` : css`
    flex-direction: row;
    justify-content: space-evenly;

    ${StyledTitle} {
      a {
        color: initial;
        text-decoration: none;
      }
    }

    ${StyledImageContainer} {
      & img, svg {
        max-width: 300px !important;
        margin: 0 4rem;
      }
    }
  
    ${StyledContent} {
      width: auto;
    }

    ${MEDIA.TABLET`
      flex-direction: column;
    `};
  `}
`;

export const StyledImageContainer = styled.div`
  & img {
    object-fit: cover;
    border-radius: 6px;
  }

  & svg {
    color: var(--color-light-gray);
  }

`;

export const StyledContent = styled.div`
  width: 275px;
  min-height: 150px;
`;

export const StyledTitle = styled.h3`
  margin: 0.5rem 0;
`;

export const StyledPrice = styled.p`
  font-weight: 600;
  margin: 0;
  padding-top: 1.5rem;
  padding-bottom: 0.25rem;

  &::before {
    content: '$'
  }
`;

export const StyledCaption = styled.p`
  border-bottom: 1px solid var(--color-very-light-gray);
  padding-bottom: 1.5rem;
  margin: 0;
`;

export const StyledDescription = styled.p`
  color: var(--color-dark-gray);
  font-style: italic;
  margin: 2rem 0 0;
`;

export const StyledProductLink = styled.a``;
