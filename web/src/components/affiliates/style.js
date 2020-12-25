import styled from 'styled-components';
import { MEDIA } from '../../lib/helpers';

export const StyledGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  list-style: none;
  padding: 0;
  margin: 2em 0 0 0;

  & li {
    flex: 0 0 33.3333%;
    text-align: center;

    ${MEDIA.TABLET`
      flex: auto;
      text-align: left;
    `};

    & a {
      display: inline-block;
    }
  }
`;
