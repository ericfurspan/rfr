import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Layout } from '../components';
import { mapEdgesToNodes } from '../lib/helpers';

const query = graphql`
  query SiteLayoutQuery {
    seo: sanitySeo {
      title
      description
      keywords
    }
    allPages: allSanityPage(
      filter: { _id: { regex: "/^[A-Za-z]+$/" } }
      sort: { fields: [order], order: ASC }
    ) {
      edges {
        node {
          _id
        }
      }
    }
    jumbotron: sanityJumbotron {
      backgroundColor
      isExtendedBgColor
      headerTextColor
      isExtendedBgImage
    }
    banner: sanityBanner {
      isEnabled
      _rawBannerText
      bannerBackgroundColor
    }
    company: sanityCompanyInfo(_id: { regex: "/(drafts.|)companyInfo/" }) {
      companyName
      caption
      logo {
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
`;

const LayoutContainer = (layoutProps) => {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const allPages = (data || {}).allPages
          ? mapEdgesToNodes(data.allPages).map((page) => page._id)
          : [];
        if (!data.company) {
          throw new Error('Missing "Company info". Open the studio and add "Company info" data');
        }
        return (
          <Layout
            {...layoutProps}
            allPages={allPages}
            companyProps={data.company}
            bannerProps={data.banner}
            jumbotronProps={data.jumbotron}
          />
        );
      }}
    />
  );
};

export default LayoutContainer;
