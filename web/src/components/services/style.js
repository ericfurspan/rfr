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

    ${MEDIA.TABLET`
      flex: auto;
    `};
  }
`;

export const StyledImageContainer = styled.div`
  & img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
`;

export const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-accent);
  border-radius: 100%;
  width: 128px;
  height: 128px;
  margin: auto;
  margin-bottom: 1.15em;

  & svg {
    color: var(--color-white);
    font-size: 4em;
  }
`;

export const StyledService = styled.div`
  padding: 0 2em 2em;
  max-width: 400px;
  margin: auto;

  & h3 {
    margin: 0 auto 0.75em;
    white-space: nowrap;
  }
`;

export const StyledServiceBody = styled.div`
  margin: 2em 0;

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
  margin-top: 2em;
  text-align: right;
`;
