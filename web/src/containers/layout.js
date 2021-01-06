import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Layout } from '../components';
import { cleanPageLink, mapEdgesToNodes } from '../lib/helpers';

const query = graphql`
  query SiteLayoutQuery {
    seo: sanitySeo {
      title
      description
      keywords
    }
    allPages: allSanityPage(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          _id
        }
      }
    }
    theme: sanityTheme {
      navMenuBg
      navMenuFg
      footerBg
      footerFg
    }
    jumbotron: sanityJumbotron {
      backgroundColor
      headerTextColor
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

const LayoutContainer = ({ location, ...rest }) => {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const allPages = (data || {}).allPages
          ? mapEdgesToNodes(data.allPages).map((page) => cleanPageLink(page._id))
          : [];

        return (
          <Layout
            location={location}
            allPages={allPages}
            companyProps={data.company}
            bannerProps={data.banner}
            jumbotronProps={data.jumbotron}
            themeProps={data.theme}
            {...rest}
          />
        );
      }}
    />
  );
};

export default LayoutContainer;
