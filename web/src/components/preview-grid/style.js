import styled from 'styled-components';
import { MEDIA } from '../../lib/helpers';

export const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1.5em;
  grid-row-gap: 1.5em;

  list-style: none;
  padding: 0;
  margin: 0;

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
