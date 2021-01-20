import styled from 'styled-components';
import { Box } from '../box';

export const StyledImageContainer = styled(Box)`
  & img {
    max-width: 200px;
    max-height: 200px;
  }
`;
