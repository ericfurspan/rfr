import styled, { css } from 'styled-components';

export const StyledRoot = styled.div`
  box-sizing: border-box;
  max-width: 1250px;
  margin: auto;
  padding: ${(props) => props.noPadding ? '0' : '8em 1.5em'};

  ${(props) =>
    props.centered &&
    css`
      text-align: center;
    `}
`;
