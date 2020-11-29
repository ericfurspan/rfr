import styled from 'styled-components';
import { MEDIA } from '../../lib/helpers';

export const StyledCoverPhoto = styled.div`
  position: relative;
  background: var(--color-very-light-gray);
  padding-bottom: calc(9 / 16 * 100%);

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    vertical-align: top;
    object-fit: cover;
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2em;

  ${MEDIA.MIN_TABLET`
    grid-template-columns: 3fr 1fr;
 `};
`;

export const StyledMainContent = styled.div``;

export const StyledEventDate = styled.div`
  margin: 1.5rem 0 3rem;
`;
