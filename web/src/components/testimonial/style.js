import styled from 'styled-components';

export const StyledWrapper = styled.div`
  max-width: 42rem;
`;

export const StyledFigure = styled.figure`
  margin: 0;
`;

export const StyledBlockquote = styled.blockquote`
  margin: 0;
  padding: 0 1rem;
  border-radius: 6px;
  width: fit-content;
  max-width: 450px;
  font-size: 1.125rem;
`;

export const StyledCitation = styled.figcaption`
  background: var(--color-dark-white);
  color: var(--color-black);
  border: 1px solid var(--color-very-light-gray);
  padding: 1.5em;
  font-weight: 400;
  border-radius: inherit;
  font-size: 1rem;
  margin-top: 2rem;
`;
