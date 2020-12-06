import styled from 'styled-components';

export const StyledWrapper = styled.div`
  max-width: 42rem;
`;

export const StyledFigure = styled.figure`
  margin: 0;
`;

export const StyledBlockquote = styled.blockquote`
  margin: 0;
  border-radius: 0.2em;
`;

export const StyledCitation = styled.figcaption`
  color: var(--color-dark-gray);
  font-style: italic;
  margin: 0.5em 0.25em 1.5em 0;

  &:before {
    content: '💬 ';
    font-size: 1.5em;
  }
`;
