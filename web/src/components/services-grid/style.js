import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin: 2em 0 4em;
`;

export const StyledGrid = styled.ul`
  margin: 0 0.25em;
  padding: 1em 0 0 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1.5em;
  grid-row-gap: 1.5em;
`;

export const StyledBrowseMore = styled.div`
  margin-top: 1rem;
  text-align: right;
`;
