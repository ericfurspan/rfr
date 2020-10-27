import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const query = graphql`
  query SiteLayoutQuery {
    seo: sanitySeo {
      title
      description
      keywords
    }
    settings: sanitySettings(_id: {regex: "/(drafts.|)settings/"}) {
      businessName
      caption
      banner
      logo {
        alt
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
    contact: sanityContact(_id: {regex: "/(drafts.|)contact/"}) {
      email
      socialMedia {
        platformName
        url
        icon {
          name
          faPackage
          faIconName
        }
      }
    }
  }
`;

function LayoutContainer (props) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.settings) {
          throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
          );
        }
        return (
          <Layout
            {...props}
            siteTitle={data.settings.businessName}
            siteSubtitle={data.settings.caption}
            siteLogo={data.settings.logo}
            siteBanner={data.settings.banner}
            contact={data.contact}
          />
        );
      }}
    />
  );
}

export default LayoutContainer;
