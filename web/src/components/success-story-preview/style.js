import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  width: 200px;
  height: 200px;
  margin: auto;
`;

export const StyledThumbnail = styled.div`
  padding-bottom: 66.666%;
  position: relative;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const StyledHeader = styled.h3`
  margin-bottom: 0.25em;

  ${StyledLink}:hover & {
    text-decoration: underline;
  }
`;
