import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;

export const StyledThumbnail = styled.div`
  position: relative;
  padding-bottom: 66.666%;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.2em;
  }
`;

export const StyledHeader = styled.h3`
  margin-bottom: 0.25em;

  ${StyledLink}:hover & {
    text-decoration: underline;
  }
`;

export const StyledCertifications = styled.span`
  color: var(--color-dark-gray);
`;
