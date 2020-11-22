import styled from 'styled-components';
import { MEDIA } from '../../lib/helpers';

export const StyledMainContent = styled.div`
  margin-top: 2em;

  display: grid;
  grid-template-columns: 1fr;

  ${MEDIA.MIN_TABLET`
    grid-template-columns: 2fr 1fr;
  `};
`;

export const StyledHeader = styled.div`
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
`;

export const StyledTitle = styled.h1`
  max-width: 40rem;
`;

export const StyledSourceName = styled.p`
  font-size: 0.875rem;
  font-style: italic;
  color: var(--color-dark-gray);
`;

export const StyledStoryLink = styled.a`
  font-size: 1.25rem;
  font-weight: 600;

  & svg {
    margin-left: 0.5rem;
  }
`;

export const StyledPublishDate = styled.div`
  margin: 1.5rem 0;
`;
