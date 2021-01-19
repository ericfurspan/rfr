import styled from 'styled-components';

export const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 4em;
  grid-row-gap: 2em;

  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledBrowseMore = styled.div`
  margin-top: 2em;
  text-align: right;
  width: 100%;
`;

export const StyledEmptyNodesText = styled.span`
  font-weight: 400;
  margin-left: 0.5em;
`;

export const StyledImageContainer = styled.div`
  text-align: center;
  
  & img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
`;
