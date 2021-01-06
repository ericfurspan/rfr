import styled from 'styled-components';

export const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;

  & svg {
    font-size: 5rem;
    margin-bottom: 0.25em;
  }

  & a, svg {
    color: var(--color-accent);
  }
`;
