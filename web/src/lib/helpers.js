import { css } from 'styled-components';
import { format, isFuture } from 'date-fns';

export function cn (...args) {
  return args.filter(Boolean).join(' ');
}

export function mapEdgesToNodes (data) {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
}

export function filterOutDocsWithoutSlugs ({ slug }) {
  return (slug || {}).current;
}

export function filterOutDocsPublishedInTheFuture ({ publishedAt }) {
  return !isFuture(publishedAt);
}

export function getTeamMemberUrl (slug) {
  return `/team/${slug.current || slug}`;
}

export function getBlogUrl (publishedAt, slug) {
  return `/blog/${format(publishedAt, 'YYYY/MM')}/${slug.current || slug}/`;
}

export function getPressReleaseUrl (publishedAt, slug) {
  return `/press/${format(publishedAt, 'YYYY/MM')}/${slug.current || slug}/`;
}

export function getEventUrl (eventAt, slug) {
  return `/events/${format(eventAt, 'YYYY/MM')}/${slug.current || slug}/`;
}

export function getTestimonialUrl (publishedAt, slug) {
  return `/testimonials/${format(publishedAt, 'YYYY/MM')}/${slug.current || slug}/`;
}

export function getUrlFromReference (reference) {
  let href;
  if (reference._type === 'post') {
    href = getBlogUrl(reference.publishedAt, reference.slug.current);
  } else if (reference._type === 'pressRelease') {
    href = getPressReleaseUrl(reference.publishedAt, reference.slug.current);
  } else if (reference._type === 'event') {
    href = getEventUrl(reference.eventAt, reference.slug.current);
  } else if (reference._type === 'testimonial') {
    href = getTestimonialUrl(reference.publishedAt, reference.slug.current);
  } else if (reference._type === 'page') {
    href = `/${reference._id}`;
  }

  return href;
}

export function buildImageObj (source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

export const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const BREAKPOINTS = {
  DESKTOP: 992,
  TABLET: 768,
  PHONE: 499,
};
// This creates the media templates, which allows for simple
// breakpoint usage inside styled-components, e.g.:
//
// ${MEDIA.PHONE`
//   font-size: 1.6rem;
// `};
//
// ${MEDIA.MIN_TABLET`
//   display: flex;
// `};
//
export const MEDIA = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(...args)};
    }
  `;

  acc[`MIN_${label}`] = (...args) => css`
    @media (min-width: ${BREAKPOINTS[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export const colorForFaPackage = (faPackage) => {
  switch (faPackage) {
    case 'youtube':
      return '#FF0100';

    case 'twitter':
      return '#51ABF1';

    case 'instagram':
      return '#923CB4';

    case 'facebook':
      return '#4967AA';

    default:
      break;
  }
};
