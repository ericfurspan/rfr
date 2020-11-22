import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  position: relative;

  &:before {
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #e6e6e6;
    content: "";
  }   
`;

export const StyledTitle = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-top: 0.75em;
  margin: 0.25em 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledCaption = styled.span`
  color: var(--color-dark-gray);
`;
