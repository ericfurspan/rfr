import styled from 'styled-components';
import { Box } from '../box';

export const StyledImageContainer = styled(Box)`
  & img {
    max-width: 250px;
    max-height: 250px;
    object-fit: cover;
  }
`;
