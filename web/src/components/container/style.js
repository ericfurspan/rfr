import styled from 'styled-components';
import { MEDIA } from '../../lib/helpers';

export const StyledRoot = styled.div`
  box-sizing: border-box;
  max-width: 1250px;
  padding: 1.5em;
  margin: 0 auto;

  ${MEDIA.MIN_PHONE`
    padding: 2em;
  `};
`;
