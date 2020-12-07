import styled from 'styled-components';

export const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2em;
  grid-row-gap: 4em;

  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledBrowseMore = styled.div`
  margin-top: 1rem;
  text-align: right;
`;
