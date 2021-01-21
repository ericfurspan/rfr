import styled, { css } from 'styled-components';
import { MEDIA } from '../../lib/helpers';

export const StyledHeading = styled.div`
  ${(props) => props.hasSubtitle && css`
    margin-bottom: 2rem;

    h2 {
      margin-bottom: 0.125em;
    }
  `}
`;

export const StyledGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  list-style: none;
  padding: 0;
  margin: 0;

  ${MEDIA.TABLET`
    flex-direction: column;

    & li {
      &:not(:last-child) {
        margin-bottom: 4em;
      }
      
      & a {
        margin: 0;
      }
    }
  `};

  & li {
    flex: 0 0 33.3333%;

    & a {
      display: inline-block;
      margin: 2em;
  
      img {
        opacity: 0.85;
      }
    }
  }
`;

export const StyledImageContainer = styled.div`
  padding-bottom: 2em;
`;
