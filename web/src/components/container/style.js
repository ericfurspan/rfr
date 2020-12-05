import styled, { css } from 'styled-components';
import { MEDIA } from '../../lib/helpers';

export const StyledRoot = styled.div`
  box-sizing: border-box;
  max-width: 1250px;
  padding: 1.5em;
  margin: 0 auto;

  ${(props) =>
    props.centered &&
    css`
      display: block;
      text-align: center;
      max-width: 768px;
    `}

  ${MEDIA.MIN_PHONE`
    padding: 2em;
  `};
`;
