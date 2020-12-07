import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 1rem;
  text-align: center;
`;

export const StyledTitle = styled.h3`
  margin: 0 auto 1em;
`;

export const StyledContent = styled.div`
  margin-top: 1.5em;
  text-align: left;

  & ul li {
   list-style: none;

   &:before {
    content: '☑️';
    color: limegreen;
    margin-right: 0.25em;
    font-size: 1.75rem;
    vertical-align: middle;
   }
  }
`;
