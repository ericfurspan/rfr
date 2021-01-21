import styled, { css } from 'styled-components';

export const StyledMainContent = styled.main`
  min-height: calc(100vh - 570px); // 570 to account for the footer (450 height + 48 vertical padding + 72 margin-top)

  ${(props) => props.hasBackdrop && css`
    opacity: 0.5;
  `}
`;
