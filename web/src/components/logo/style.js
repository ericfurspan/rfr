import styled from 'styled-components';
import { MEDIA } from '../../lib/helpers';

export const StyledLogo = styled.img`
  border-radius: 100%;
  margin: auto 0.875rem;

  ${MEDIA.PHONE`
    margin: 0.875rem auto;
  `};
`;
