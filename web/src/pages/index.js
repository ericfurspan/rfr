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
import { Jumbotron, Mission, PreviewNodes, Services, Products, Podcast, Box, Affiliates, Stars } from '../components';

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
          headingSubtitle
          photo {
            asset {
              _id
            }
            alt
          }
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
          icon {
            name
            faPackage
            faIconName
          }
        }
      }
    }
    products: allSanityProduct(limit: 4) {
      edges {
        node {
          id
          title
          caption
          description
          price
          link
          linkText
          image {
            asset {
              _id
            }
            alt
          }
          slug {
            current
          }
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
    testimonials: allSanityTestimonial(limit: 4, sort: { fields: [reviewedAt], order: DESC }) {
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
    affiliates: allSanityAffiliate {
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
    teamMembers: allSanityTeamMember(limit: 4, sort: { fields: [order], order: ASC }) {
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
    posts: allSanityPost(limit: 2, sort: { fields: [publishedAt], order: DESC }) {
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
    pressReleases: allSanityPressRelease(limit: 2, sort: { fields: [publishedAt], order: DESC }) {
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
    events: allSanityEvent(limit: 2, sort: { fields: [eventAt], order: DESC }) {
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

const IndexPage = ({ data, location }) => {
  const { company, jumbotron, seo, podcast } = (data || {});

  if (!company) {
    throw new Error(
      'Missing "Company" data. Open the studio and add content to "Company", then restart the server.'
    );
  }

  const servicesNodes = (data || {}).services ? mapEdgesToNodes(data.services) : [];
  const productNodes = (data || {}).products ? mapEdgesToNodes(data.products).filter(filterOutDocsWithoutSlugs) : [];
  const testimonialNodes = (data || {}).testimonials
    ? mapEdgesToNodes(data.testimonials)
      .filter(filterOutDocsWithoutSlugs)
      .map((item) => ({
        ...item,
        linkTo: getTestimonialUrl(item.reviewedAt, item.slug.current),
        title: `${item.reviewer}`,
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

  // A mapping of what content to preview on the page
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

      <Box
        d='grid'
        gridResponsive
        gtc='repeat(12, minmax(0, 1fr))'
        gg='2rem'
      >
        {contentPreviewMap['missionPreview'] && (
          <Mission
            title={contentPreviewMap['missionPreview'].headingText}
            subtitle={contentPreviewMap['missionPreview'].headingSubtitle}
            image={contentPreviewMap['missionPreview'].photo}
            _rawMission={company._rawMission}
            gc='2 / -2'
            p='4rem 2rem'
          />
        )}
        {contentPreviewMap['servicesPreview'] && (
          servicesNodes.length > 0 &&
          <Services
            title={contentPreviewMap['servicesPreview'].headingText}
            subtitle={contentPreviewMap['servicesPreview'].headingSubtitle}
            image={contentPreviewMap['servicesPreview'].photo}
            nodes={servicesNodes}
            browseMoreText={contentPreviewMap['servicesPreview'].browseMoreText}
            browseMoreHref='/services'
            previewMode
            gc='1 / -1'
            p='4rem 2rem'
            br='var(--color-dark-white)'
          />
        )}

        {contentPreviewMap['newsPreview'] && (
          <Box
            gc='1 / 7'
            p='2rem'
          >
            {allNewsNodes.length > 0 && (
              <PreviewNodes
                title={contentPreviewMap['newsPreview'].headingText}
                subtitle={contentPreviewMap['newsPreview'].headingSubtitle}
                image={contentPreviewMap['newsPreview'].photo}
                nodes={allNewsNodes}
                nodeType='generic'
                browseMoreText={contentPreviewMap['newsPreview'].browseMoreText}
                browseMoreHref='/news'
              />
            )}
          </Box>
        )}

        {contentPreviewMap['podcastPreview'] && (
          <Box gc='7 / -1' p='4rem 2rem 2rem'>
            <Podcast {...podcast} />
          </Box>
        )}

        {contentPreviewMap['teamPreview'] && (
          teamMemberNodes.length > 0 &&
          <PreviewNodes
            title={contentPreviewMap['teamPreview'].headingText}
            subtitle={contentPreviewMap['teamPreview'].headingSubtitle}
            image={contentPreviewMap['teamPreview'].photo}
            nodes={teamMemberNodes}
            nodeType='teamMember'
            browseMoreText={contentPreviewMap['teamPreview'].browseMoreText}
            browseMoreHref='/team'
            gc='1 / -1'
            p='4rem 2rem'
            ta='center'
          />
        )}

        {contentPreviewMap['merchandisePreview'] &&
          productNodes.length > 0 &&
        (
          <Products
            title={contentPreviewMap['merchandisePreview'].headingText}
            subtitle={contentPreviewMap['merchandisePreview'].headingSubtitle}
            image={contentPreviewMap['merchandisePreview'].photo}
            browseMoreText={contentPreviewMap['merchandisePreview'].browseMoreText}
            browseMoreHref='/merchandise'
            nodes={productNodes}
            gc='1 / -1'
            p='2rem'
            ta='center'
            br='var(--color-dark-white)'
          />
        )}

        {contentPreviewMap['affiliatesPreview'] && (
          affiliateNodes.length > 0 &&
          <Affiliates
            title={contentPreviewMap['affiliatesPreview'].headingText}
            subtitle={contentPreviewMap['affiliatesPreview'].headingSubtitle}
            image={contentPreviewMap['affiliatesPreview'].photo}
            nodes={affiliateNodes}
            gc='1 / -1'
            p='4rem 2rem'
          />
        )}

        {contentPreviewMap['testimonialsPreview'] &&
          testimonialNodes.length > 0 &&
        (
          <Box
            gc='1 / -1'
            p='4rem 2rem'
          >
            <Stars amount={5} align='center' />

            <PreviewNodes
              title={contentPreviewMap['testimonialsPreview'].headingText}
              subtitle={contentPreviewMap['testimonialsPreview'].headingSubtitle}
              image={contentPreviewMap['testimonialsPreview'].photo}
              nodes={testimonialNodes}
              nodeType='generic'
              browseMoreText={contentPreviewMap['testimonialsPreview'].browseMoreText}
              browseMoreHref='/testimonials'
              flex
              col
              ai='center'
            />
          </Box>
        )}
      </Box>
    </>
  );
};

export default IndexPage;
