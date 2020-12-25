import React from 'react';
import { graphql } from 'gatsby';
import { format } from 'date-fns';

import {
  filterOutDocsWithoutSlugs,
  getBlogUrl,
  getEventUrl,
  getPressReleaseUrl,
  getTestimonialUrl,
  mapEdgesToNodes,
} from '../lib/helpers';
import SEO from '../containers/seo';
import { Jumbotron, PreviewNodes, Services, Podcast, Box, BlockContent, Affiliates, Typography } from '../components';

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
      _rawMission
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
    contentPreviews: allSanityContentPreview(filter: { shouldRender: { eq: true } }) {
      edges {
        node {
          _id
          headingText
          browseMoreText
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
    podcast: sanityPodcast {
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
    testimonials: allSanityTestimonial(limit: 6, sort: { fields: [reviewedAt], order: DESC }) {
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
    affiliates: allSanityAffiliate(limit: 6) {
      edges {
        node {
          id
          name
          url
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
  const { company, jumbotron, seo, podcast } = (data || {});

  if (!company) {
    throw new Error(
      'Missing "Company Info". Open the studio and add some content to "Company Info" then restart the development server.'
    );
  }

  const servicesNodes = (data || {}).services ? mapEdgesToNodes(data.services) : [];
  const testimonialNodes = (data || {}).testimonials
    ? mapEdgesToNodes(data.testimonials)
      .filter(filterOutDocsWithoutSlugs)
      .map((item) => ({
        ...item,
        linkTo: getTestimonialUrl(item.reviewedAt, item.slug.current),
        title: `by ${item.reviewer}`,
        caption: format(item.reviewedAt, 'DD MMMM YYYY'),
        text: item.text.slice(0, 128) + '...(continued)',
      }))
    : [];
  const affiliateNodes = (data || {}).affiliates ? mapEdgesToNodes(data.affiliates) : [];
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

  // A mapping of what content should be previewable on the page
  const contentPreviewMap = (data || {}).contentPreviews
    ? mapEdgesToNodes(data.contentPreviews)
      .reduce((acc, curr) => {
        const { _id, ...rest } = curr;
        return { ...acc, [curr._id]: rest };
      }, {})
    : [];

  return (
    <>
      <SEO title={seo.title} description={seo.description} keywords={seo.keywords} />

      <Jumbotron {...jumbotron} />

      {company._rawMission && contentPreviewMap['missionPreview'] && (
        <Box flex col ai='center' p='3em 6em'>
          <h2 css={Typography.responsiveTitle2}>
            {contentPreviewMap['missionPreview'].headingText}
          </h2>
          <Box ta='left'>
            <BlockContent blocks={company._rawMission} />
          </Box>
        </Box>
      )}

      <Box d='grid' gridResponsive gtc='repeat(12, minmax(0, 1fr))' grg='4em' gcg='2em' p='2em'>
        {contentPreviewMap['servicesPreview'] && (
          <Services
            title={contentPreviewMap['servicesPreview'].headingText}
            nodes={servicesNodes}
            browseMoreText={contentPreviewMap['servicesPreview'].browseMoreText}
            browseMoreHref='/services'
            previewMode
            gc='1 / -1'
          />
        )}

        {contentPreviewMap['affiliatesPreview'] && (
          <Affiliates
            title={contentPreviewMap['affiliatesPreview'].headingText}
            nodes={affiliateNodes}
            gc='1 / -1'
          />
        )}

        {contentPreviewMap['teamPreview'] && (
          <PreviewNodes
            title={contentPreviewMap['teamPreview'].headingText}
            nodes={teamMemberNodes}
            nodeType='teamMember'
            browseMoreText={contentPreviewMap['teamPreview'].browseMoreText}
            browseMoreHref='/team'
            gc='1 / -1'
          />
        )}

        {contentPreviewMap['newsPreview'] && (
          <PreviewNodes
            title={contentPreviewMap['newsPreview'].headingText}
            nodes={allNewsNodes}
            nodeType='generic'
            browseMoreText={contentPreviewMap['newsPreview'].browseMoreText}
            browseMoreHref='/news'
            gc='1 / -1'
          />
        )}

        {contentPreviewMap['podcastPreview'] && (
          <Box gc='1 / -1' maxw='750px'>
            <Podcast {...podcast} />
          </Box>
        )}

        {contentPreviewMap['testimonialsPreview'] && (
          <PreviewNodes
            title={contentPreviewMap['testimonialsPreview'].headingText}
            nodes={testimonialNodes}
            nodeType='generic'
            browseMoreText={contentPreviewMap['testimonialsPreview'].browseMoreText}
            browseMoreHref='/testimonials'
            gc='1 / -1'
          />
        )}
      </Box>
    </>
  );
};

export default IndexPage;
