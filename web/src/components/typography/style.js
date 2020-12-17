import { css } from 'styled-components';
import { MEDIA } from '../../lib/helpers';

/*
 * Statically sized elements
 */
export const title1 = css`
  font-size: var(--font-title1-size);
  line-height: var(--font-title1-line-height);
`;
export const title2 = css`
  font-size: var(--font-title2-size);
  line-height: var(--font-title2-line-height);
`;
export const title3 = css`
  font-size: var(--font-title3-size);
  line-height: var(--font-title3-line-height);
`;
export const large = css`
  font-size: var(--font-large-size);
  line-height: var(--font-large-line-height);
  margin-bottom: 0.5em;
`;
export const base = css`
  font-size: inherit;
  line-height: inherit;
`;
export const small = css`
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  font-weight: 500;
`;
export const micro = css`
  font-size: var(--font-micro-size);
  line-height: var(--font-micro-line-height);
  text-transform: uppercase;
`;

/*
 * Responsively sized elements
 */
export const paragraph = css`
  font-size: var(--font-base-size);
  line-height: var(--font-base-line-height);
  margin: 0.5rem 0 1rem 0;
`;
export const blockQuote = css`
  background: var(--color-very-light-gray);
  padding: 1rem;
`;
export const responsiveTitle1 = css`
  font-weight: 700;
  font-size: var(--font-title1-size);
  line-height: var(--font-title1-line-height);

  ${MEDIA.PHONE`
    font-size: var(--font-title2-size);
    line-height: var(--font-title2-line-height);
  `};
`;
export const responsiveTitle2 = css`
  font-weight: 700;
  font-size: var(--font-title2-size);
  line-height: var(--font-title2-line-height);
  margin: 1.5rem 0 1rem;

  ${MEDIA.PHONE`
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
  `};
`;
export const responsiveTitle3 = css`
  font-weight: 700;
  font-size: var(--font-title3-size);
  line-height: var(--font-title3-line-height);

  ${MEDIA.PHONE`
    font-size: var(--font-large-size);
    line-height: var(--font-large-line-height);
  `};
`;
export const responsiveTitle4 = css`
  font-size: var(--font-base-size);
  line-height: var(--font-base-line-height);

  ${MEDIA.PHONE`
    font-size: var(--font-base-size);
    line-height: var(--font-base-line-height);
  `};
`;
export const responsiveTitle5 = css`
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);

  ${MEDIA.PHONE`
    font-size: var(--font-small-size);
    line-height: var(--font-small-line-height);
  `};
`;

/*
 * Alternate elements
 */
export const subtitle = css`
  color: var(--color-black);
  background-color: var(--color-very-light-gray);
  font-weight: 300;
  border-radius: 0.2em;
  padding: 0.75em;
`;
export const headline = css`
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 2rem 0;
  width: max-content;
  border-bottom: 1px solid var(--color-black);
`;
