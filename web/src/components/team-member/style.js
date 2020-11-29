import styled from 'styled-components';
import { Link } from 'gatsby';
import { MEDIA } from '../../lib/helpers';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 0.875em;
  width: max-content;

  & svg {
    margin-right: 0.5em;
  }
`;

export const StyledImageContainer = styled.div`
  position: relative;
  padding-bottom: calc(9 / 16 * 100%);

  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    vertical-align: top;
    object-fit: cover;
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2em;

  ${MEDIA.MIN_TABLET`
    grid-template-columns: 3fr 1fr;
  `};
`;

export const StyledMainContent = styled.div``;

export const StyledListGroup = styled.div`
  border-top: 1px solid var(--color-very-light-gray);
  margin: 2rem 0 3rem;

  & ul {
    list-style: none;
    margin: 0.75rem 0;
    padding: 0;
  }

  & ul li {
    padding: 0.25rem 0;
  }
`;

export const StyledListGroupHeadline = styled.h3`
  margin: 0.5rem 0 0;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;

  & a {
    color: var(--color-fg);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: var(--color-link);
    }
  }
`;

export const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 36px 1fr;
  margin: 1em 0;
  align-items: center;

  & svg {
    font-size: 21px;
  }
`;
