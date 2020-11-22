import styled from 'styled-components';
import { MEDIA } from '../../lib/helpers';

export const StyledContent = styled.main`
  min-height: calc(100% - 73px - 120px);

  ${MEDIA.MIN_PHONE`
    min-height: calc(100% - 88px - 150px);
  `};
`;
