import React, { useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Layout from '../components/layout';
import { mapEdgesToNodes } from '../lib/helpers';

const query = graphql`
  query SiteLayoutQuery {
    seo: sanitySeo {
      title
      description
      keywords
    }
    allPages: allSanityPage(filter: {_id: {regex: "/^[A-Za-z]+$/"}}) {
      edges {
        node {
          _id
        }
      }
    }
    company: sanityCompanyInfo(_id: {regex: "/(drafts.|)companyInfo/"}) {
      companyName
      caption
      banner
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

const LayoutContainer = (props) => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => setShowNav(true);
  const handleHideNav = () => setShowNav(false);

  return (
    <StaticQuery
      query={query}
      render={data => {
        const allPageIds = (data || {}).allPages ? mapEdgesToNodes(data.allPages).map((page) => page._id) : [];
        if (!data.company) {
          throw new Error(
            'Missing "Company info". Open the studio at http://localhost:3333 and add "Company info" data'
          );
        }
        return (
          <Layout
            {...props}
            siteTitle={data.company.companyName}
            siteLogo={data.company.logo}
            siteBanner={data.company.banner}
            contactInfo={data.company.contact}
            showNav={showNav}
            onHideNav={handleHideNav}
            onShowNav={handleShowNav}
            allPageIds={allPageIds}
          />
        );
      }}
    />
  );
};

export default LayoutContainer;
