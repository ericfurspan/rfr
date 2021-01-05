import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  position: relative;
`;

export const StyledTitle = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0.25em 0;
`;

export const StyledContent = styled.span`
  color: var(--color-dark-gray);
`;

export const StyledCaption = styled.span`
  display: block;
  font-weight: 400 !important;
  margin: 0.25em 0 0.75em;
`;
