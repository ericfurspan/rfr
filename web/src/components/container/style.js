import styled, { css } from 'styled-components';

export const StyledRoot = styled.div`
  box-sizing: border-box;
  max-width: 1250px;
  padding: 1.5em;
  margin: 2em auto;

  ${(props) =>
    props.centered &&
    css`
      text-align: center;
    `}
`;
