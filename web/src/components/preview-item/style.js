import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  position: relative;
`;

export const StyledTitle = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-top: 0.75em;
  margin: 0.25em 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledContent = styled.span`
  color: var(--color-dark-gray);
`;

export const StyledCaption = styled.span`
  color: var(--color-dark-gray);
  display: block;
  margin: 0.25em 0 0.75em;
`;
