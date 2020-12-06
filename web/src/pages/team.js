import React from 'react';
import { graphql } from 'gatsby';

import { mapEdgesToNodes } from '../lib/helpers';
import SEO from '../containers/seo';
import { Container, BlockContent, PreviewGrid } from '../components';

export const query = graphql`
  query TeamPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)team/" }) {
      _rawBody(resolveReferences: { maxDepth: 4 })
      isCentered
    }
    teamMembers: allSanityTeamMember(sort: { fields: [order], order: ASC }) {
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
  }
`;

const TeamPage = ({ data }) => {
  const page = data && data.page;

  if (!page) {
    throw new Error(
      'Missing "Team" page data. Open the studio and add "Team" page data then restart the development server.'
    );
  }

  const teamMemberNodes = data && data.teamMembers && mapEdgesToNodes(data.teamMembers);

  return (
    <>
      <SEO title='Team' />
      <Container centered={page.isCentered}>
        <BlockContent blocks={page._rawBody || []} />
        <br /> <br />

        <PreviewGrid nodes={teamMemberNodes} nodeType='teamMember' />
      </Container>
    </>
  );
};

export default TeamPage;
