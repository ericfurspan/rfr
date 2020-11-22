import styled from 'styled-components';
import { MEDIA } from '../../lib/helpers';

export const StyledWrapper = styled.div`
  margin: 2em 0 4em;
`;

export const StyledGrid = styled.ul`
  margin: 0 0.25em;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 2em;

  ${MEDIA.MIN_PHONE`
    grid-template-columns: 1fr 1fr;
  `};

  ${MEDIA.MIN_TABLET`
    grid-template-columns: 1fr 1fr 1fr;
  `};
`;

export const StyledBrowseMore = styled.div`
  margin-top: 1rem;
  text-align: right;
`;

export const StyledEmptyNodesText = styled.span`
  font-weight: 400;
  margin-left: 0.5em;
`;
