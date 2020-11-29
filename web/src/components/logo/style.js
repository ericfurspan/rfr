import styled from 'styled-components';
import { MEDIA } from '../../lib/helpers';

export const StyledLogo = styled.img`
  border-radius: 100%;
  margin: ${(props) => (props.noMargin ? 0 : 'auto 0.875rem')};

  ${MEDIA.PHONE`
    margin: ${(props) => (props.noMargin ? 0 : '0.875rem auto')};
  `};
`;
