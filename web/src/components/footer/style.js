import styled from 'styled-components';
import { MEDIA } from '../../lib/helpers';

export const StyledFooter = styled.footer`
  background: var(--color-black);
  color: var(--color-light-gray);
  margin-top: 2em;

  & a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: var(--color-white);
    }
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 2em 4em;

  ${MEDIA.TABLET`
    grid-template-columns: 1fr;
    
    & section {
      margin-bottom: 2em;
    }
  `};
`;

export const StyledSectionHeading = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
`;

export const StyledBrandSection = styled.section`
  display: flex;
  flex-direction: column;

  & ${StyledSectionHeading} {
    display: flex;
    align-items: center;
  }
`;

export const StyledSocialMediaSection = styled.section`
  display: flex;
  flex-direction: column;

  & a {
    display: grid;
    grid-template-columns: minmax(24px, 48px) auto;
    align-items: center;
    margin-bottom: 0.25em;
  }
`;

export const StyledSiteMapSection = styled.section`
  & ul {
    margin: 0;
    padding: 0;
  }

  & ul li {
    display: block;
    color: inherit;
    text-decoration: none;
    margin-bottom: 0.25em;
  }

  & ul li a:hover {
      text-decoration: underline;
    }  
`;

export const StyledNewsletterSection = styled.section`
  & input {
    padding: 0.25em;
    margin-right: 0.25em;
  }
`;

export const StyledSiteInfoSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
`;
