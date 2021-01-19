import styled from 'styled-components';

export const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  margin-top: 2em;

  & svg {
    font-size: 5rem;
    margin-bottom: 0.25em;
  }

  a {
    width: max-content;
    margin: auto;
  }

  & a, svg {
    color: var(--color-accent);
  }
`;
