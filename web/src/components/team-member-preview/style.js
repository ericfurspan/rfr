import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  width: 275px;
  height: 275px;
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
    width: 275px;
    height: 275px;
    object-fit: cover;
    border-radius: 50%;
    border: 6px solid var(--color-very-light-gray);
  }
`;

export const StyledHeader = styled.h3`
  margin-bottom: 0.25em;
  margin-top: 1.5em;

  ${StyledLink}:hover & {
    text-decoration: underline;
  }
`;

export const StyledCertifications = styled.div`
  color: var(--color-dark-gray);
`;
