import styled, { css } from 'styled-components';

export const StyledMainContent = styled.main``;

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
