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
`;
export const largeLight = css`
  font-size: var(--font-large-size);
  line-height: var(--font-large-line-height);
  font-weight: 400;
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

  ${MEDIA.MIN_PHONE`
    font-size: var(--font-base-size);
    line-height: var(--font-base-line-height);
  `};

  ${MEDIA.MIN_TABLET`
    font-size: var(--font-large-size);
    line-height: var(--font-large-line-height);
  `};
`;
export const blockQuote = css`
  background: var(--color-very-light-gray);
`;
export const responsiveTitle1 = css`
  font-weight: 700;
  font-size: var(--font-title3-size);
  line-height: var(--font-title3-line-height);
  margin: 1rem 0 2rem;

  ${MEDIA.MIN_PHONE`
    font-size: var(--font-title2-size);
    line-height: var(--font-title2-line-height);
  `};

  ${MEDIA.MIN_TABLET`
    font-size: var(--font-title1-size);
    line-height: var(--font-title1-line-height);
  `};
`;
export const responsiveTitle2 = css`
  font-weight: 700;
  font-size: var(--font-large-size);
  line-height: var(--font-large-line-height);
  margin: 1.5rem 0 1rem;

  ${MEDIA.MIN_PHONE`
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
  `};

  ${MEDIA.MIN_TABLET`
    font-size: var(--font-title2-size);
    line-height: var(--font-title2-line-height);
  `};
`;
export const responsiveTitle3 = css`
  font-weight: 700;
  font-size: var(--font-large-size);
  line-height: var(--font-large-line-height);
  margin: 0.75rem 0 0.25rem;

  ${MEDIA.MIN_PHONE`
    font-size: var(--font-large-size);
    line-height: var(--font-large-line-height);
  `};

  ${MEDIA.MIN_TABLET`
    font-size: var(--font-title3-size);
    line-height: var(--font-title3-line-height);
  `};
`;
export const responsiveTitle4 = css`
  font-size: var(--font-base-size);
  line-height: var(--font-base-line-height);

  ${MEDIA.MIN_PHONE`
    font-size: var(--font-base-size);
    line-height: var(--font-base-line-height);
  `};

  ${MEDIA.MIN_TABLET`
    font-size: var(--font-large-size);
    line-height: var(--font-large-line-height);
  `};
`;
export const responsiveTitle5 = css`
  font-size: var(--font-small-size);
  line-height: var(--font-small-line-height);

  ${MEDIA.MIN_PHONE`
    font-size: var(--font-small-size);
    line-height: var(--font-small-line-height);
  `};

  ${MEDIA.MIN_TABLET`
    font-size: var(--font-base-size);
    line-height: var(--font-base-line-height);
  `};
`;

/*
 * Alternate elements
 */
export const subtitle = css`
  color: var(--color-dark-gray);
  background-color: var(--color-very-light-gray);
  font-weight: 500;
  border-radius: 0.2em;
  padding: 0.65em;
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
