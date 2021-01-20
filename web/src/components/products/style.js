import styled, { css } from 'styled-components';

export const StyledHeading = styled.div`
  ${(props) => props.hasSubtitle && css`
    margin-bottom: 2rem;

    h2 {
      margin-bottom: 0.125em;
    }
  `}
`;
