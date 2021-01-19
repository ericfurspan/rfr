import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledTitle = styled.h3`
  & svg {
    margin-right: 0.5em;
  }

  &::before {
    content: '🎧';
    margin-right: 0.5em;
  }
`;

export const StyledContainer = styled.div`
  width: 20rem;
  margin-top: 1.5em;
`;

export const StyledItem = styled.div`
  margin-bottom: 1em;
  display: flex;
  align-items: center;
`;

export const StyledFaIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5em;
  font-size: 1.25em;
  width: 10% !important;
`;
