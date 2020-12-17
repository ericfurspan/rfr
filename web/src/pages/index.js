import React from 'react';
import { graphql } from 'gatsby';
import { format } from 'date-fns';

import {
  filterOutDocsWithoutSlugs,
  getBlogUrl,
  getEventUrl,
  getPressReleaseUrl,
  getReviewUrl,
  mapEdgesToNodes,
} from '../lib/helpers';
import SEO from '../containers/seo';
import { Jumbotron, PreviewGrid, ServicesGrid, Podcast, Box } from '../components';

export const query = graphql`
  query IndexPageQuery {
    seo: sanitySeo {
      title
      description
      keywords
    }
    company: sanityCompanyInfo(_id: { regex: "/(drafts.|)companyInfo/" }) {
      companyName
      caption
      mission
      contact {
        email
        socialMedia {
          linkText
          url
          icon {
            name
            faPackage
            faIconName
          }
        }
      }
    }
    jumbotron: sanityJumbotron {
      _rawTitle
      _rawSubtitle
      isCentered
      ctaButton {
        buttonText
        buttonSize
        buttonTextColor
        buttonBgColor
        _rawButtonLinkTo(resolveReferences: { maxDepth: 5 })
        isRounded
      }
      backgroundOpacity
      backgroundColor
      backgroundImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
    }
    services: allSanityService(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          title
          _rawSubtitle
        }
      }
    }
    podcasts: allSanityPodcast {
      edges {
        node {
          id
          title
          _rawDescription
          availablePlatforms {
            linkText
            url
            icon {
              name
              faPackage
              faIconName
            }
          }
        }
      }
    }
    reviews: allSanityReview(limit: 6, sort: { fields: [reviewedAt], order: DESC }) {
      edges {
        node {
          id
          text
          reviewedAt
          reviewer
          slug {
            current
          }
        }
      }
    }
    teamMembers: allSanityTeamMember(limit: 3, sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          slug {
            current
          }
          certifications
          _rawPerson(resolveReferences: { maxDepth: 1 })
          person {
            name
            contact {
              email
              socialMedia {
                linkText
                url
                icon {
                  name
                  faPackage
                  faIconName
                }
              }
            }
            image {
              crop {
                _key
                _type
                top
                bottom
                left
                right
              }
              hotspot {
                _key
                _type
                x
                y
                height
                width
              }
              asset {
                _id
              }
            }
          }
        }
      }
    }
    posts: allSanityPost(sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
          coverPhoto {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          slug {
            current
          }
        }
      }
    }
    pressReleases: allSanityPressRelease(sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          source
          title
          url
          publishedAt
          slug {
            current
          }
        }
      }
    }
    events: allSanityEvent(sort: { fields: [eventAt], order: DESC }) {
      edges {
        node {
          id
          title
          eventAt
          coverPhoto {
            asset {
              _id
            }
          }
          organizers {
            person {
              name
              contact {
                email
                socialMedia {
                  linkText
                  url
                  icon {
                    name
                    faPackage
                    faIconName
                  }
                }
              }
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const { company } = (data || {});

  if (!company) {
    throw new Error(
      'Missing "Company Info". Open the studio and add some content to "Company Info" then restart the development server.'
    );
  }

  const { jumbotron } = data || {};
  const servicesNodes = (data || {}).services ? mapEdgesToNodes(data.services) : [];
  const podcastNodes = (data || {}).podcasts ? mapEdgesToNodes(data.podcasts) : [];
  const reviewsNodes = (data || {}).reviews
    ? mapEdgesToNodes(data.reviews)
      .filter(filterOutDocsWithoutSlugs)
      .map((item) => ({
        ...item,
        linkTo: getReviewUrl(item.reviewedAt, item.slug.current),
        title: `by ${item.reviewer}`,
        caption: format(item.reviewedAt, 'DD MMMM YYYY'),
        text: item.text.slice(0, 128) + '...(continued)',
      }))
    : [];
  const teamMemberNodes = (data || {}).teamMembers
    ? mapEdgesToNodes(data.teamMembers).filter(filterOutDocsWithoutSlugs)
    : [];
  const blogPostNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .map((item) => ({
        ...item,
        linkTo: getBlogUrl(item.publishedAt, item.slug.current),
        text: `Blog — ${format(item.publishedAt, 'DD MMMM YYYY')}`,
      }))
    : [];
  const pressReleaseNodes = (data || {}).pressReleases
    ? mapEdgesToNodes(data.pressReleases)
      .filter(filterOutDocsWithoutSlugs)
      .map((item) => ({
        ...item,
        linkTo: getPressReleaseUrl(item.publishedAt, item.slug.current),
        text: `Press — ${format(item.publishedAt, 'DD MMMM YYYY')}`,
      }))
    : [];
  const eventNodes = (data || {}).events
    ? mapEdgesToNodes(data.events)
      .filter(filterOutDocsWithoutSlugs)
      .map((item) => ({
        ...item,
        linkTo: getEventUrl(item.eventAt, item.slug.current),
        text: `Event — ${format(item.eventAt, 'DD MMMM YYYY')}`,
      }))
    : [];
  const allNewsNodes = [...blogPostNodes, ...pressReleaseNodes, ...eventNodes].slice(0, 6);

  return (
    <>
      <SEO title={data.seo.title} description={data.seo.description} keywords={data.seo.keywords} />

      <Box gc='1 / -1'>
        <Jumbotron {...jumbotron} />
      </Box>

      <Box d='grid' gridResponsive gtc='repeat(12, minmax(0, 1fr))' grg='4em' gcg='2em' p='2em'>
        <h1 hidden>{data.seo.title}</h1>

        {servicesNodes.length > 0 && (
          <ServicesGrid
            nodes={servicesNodes}
            browseMoreHref='/services'
            browseMoreText='Learn more about what we do'
            previewMode
            gc='2 / -2'
          />
        )}

        {teamMemberNodes.length > 0 && (
          <PreviewGrid
            title='Our Team'
            nodes={teamMemberNodes}
            nodeType='teamMember'
            browseMoreHref='/team'
            browseMoreText='See all team members'
            gc='1 / -1'
          />
        )}

        {allNewsNodes.length > 0 && (
          <PreviewGrid
            title='News'
            nodes={allNewsNodes}
            nodeType='default'
            browseMoreHref='/news'
            browseMoreText='See all news &amp; events'
            gc='1 / 7'
          />
        )}

        {podcastNodes.length > 0 && (
          <Box gc='8 / -1'>
            {podcastNodes.map((podcast) => (
              <Podcast key={podcast.id} {...podcast} />
            ))}
          </Box>
        )}

        {reviewsNodes.length > 0 && (
          <PreviewGrid
            title='Reviews'
            nodes={reviewsNodes}
            nodeType='default'
            browseMoreHref='/reviews'
            browseMoreText='See all reviews'
            gc='1 / 7'
          />
        )}
      </Box>
    </>
  );
};

export default IndexPage;
