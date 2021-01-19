import styled, { css } from 'styled-components';
import { Box } from '..';
import { MEDIA } from '../../lib/helpers';

export const StyledProduct = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${(props) => props.previewMode ? css`
    padding: 1rem;
    background: var(--color-dark-white);
    border: 1px solid var(--color-very-light-gray);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius: 6px;
    width: fit-content;
  
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
    width: 275px;
    height: 275px;
    object-fit: cover;
    border-radius: 6px;
  }

  & svg {
    width: 275px !important;
    height: 275px !important;
    color: var(--color-light-gray);
  }
`;

export const StyledContent = styled.div`
  width: 100%;
`;

export const StyledTitle = styled.p`
  margin: 0.5rem 0;
  font-size: var(--font-title3-size);
  font-weight: 700;
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
