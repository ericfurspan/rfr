import styled, { css } from 'styled-components';

export const StyledMainContent = styled.main`
  min-height: calc(100vh - 570px); // 570 to account for the footer (450 height + 48 vertical padding + 72 margin-top)
`;

export const StyledBackdrop = styled.div`
  ${(props) => props.hasBackdrop && css`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.75);
    touch-action: none;
    user-select: none;

    header, main, footer {
      opacity: 0.25;

      * > a, button, input, img {
        pointer-events: none;
        cursor: none;
      }
    }
  `}
`;
