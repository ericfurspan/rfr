import styled from 'styled-components';

export const StyledHeader = styled.div``;

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
  margin: 1.5rem 0 3rem;
`;
