import styled from 'styled-components';
import { MEDIA } from '../../lib/helpers';

export const StyledFooter = styled.footer`
  background: var(--color-black);
  color: var(--color-light-gray);
  margin-top: 6em;
  padding: 2em 4em;
  font-size: var(--font-small-size);

  & hr {
    border-color: var(--color-dark-gray);
    background-color: var(--color-dark-gray);
    color: var(--color-dark-gray);
    margin-bottom: 1em;
    height: 1px;
    border: 0;
  }

  ${MEDIA.PHONE`
    padding: 2em;
  `};
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  ${MEDIA.TABLET`
    grid-template-columns: 1fr;
  `};
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1em 0;

  & ul {
    margin: 0;
    padding: 0;

    & li {
      display: block;
      color: inherit;
      text-decoration: none;
      margin-bottom: 1em;

      & a {
        color: inherit;
        text-decoration: none;

        &:hover {
          color: var(--color-very-light-gray);
          text-decoration: underline;
        }

        & svg {
          margin-right: 0.75em;
        }
      }
    }
  }
`;

export const StyledSectionHeading = styled.p`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.125rem;
  white-space: pre;
  color: var(--color-white);
`;

export const StyledCredits = styled.div`
  font-size: var(--font-micro-size);
  display: flex;
  align-items: center;
  justify-content: space-between;

  & span:not(:last-of-type) {
    margin-bottom: 0.5em;
    display: block;
  }

  & a {
    color: inherit;
  }
`;
