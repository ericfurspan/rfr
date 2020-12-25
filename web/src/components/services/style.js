import styled from 'styled-components';
import { MEDIA } from '../../lib/helpers';

export const StyledGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  list-style: none;
  padding: 0;
  margin: 0;

  & li {
    flex: 0 0 33.3333%;
    text-align: center;

    ${MEDIA.TABLET`
      flex: auto;
      text-align: left;
    `};
  }
`;

export const StyledService = styled.div`
  padding: 1em 2em;

  & h3 {
    margin: 0 auto 1em;
    white-space: nowrap;
  }
`;

export const StyledServiceBody = styled.div`
  margin-top: 1.5em;
  text-align: left;

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  
    li {
      text-align: left;

      &:before {
        content: '☑️';
        color: limegreen;
        margin-right: 0.25em;
        font-size: 1.75rem;
        vertical-align: middle;
      }
    }
  }
`;

export const StyledBrowseMore = styled.div`
  margin-top: 1rem;
  text-align: right;
`;
