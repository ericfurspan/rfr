import React from 'react';
import { graphql } from 'gatsby';

import { mapEdgesToNodes } from '../lib/helpers';
import SEO from '../containers/seo';
import { Container, BlockContent, PreviewGrid } from '../components';

export const query = graphql`
  query TeamPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)team/" }) {
      _rawBody
    }
    teamMembers: allSanityTeamMember(sort: { fields: [priority], order: ASC }) {
      edges {
        node {
          id
          slug {
            current
          }
          certifications
          _rawPerson(resolveReferences: {maxDepth: 1})
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

const TeamPage = props => {
  const { data } = props;

  const page = data && data.page;

  if (!page) {
    throw new Error(
      'Missing "Team" page data. Open the studio at http://localhost:3333 and add "Team" page data then restart the development server.'
    );
  }

  const teamMemberNodes = data && data.teamMembers && mapEdgesToNodes(data.teamMembers);

  return (
    <>
      <SEO title='Team' />
      <Container>
        <BlockContent blocks={page._rawBody || []} />
        <PreviewGrid
          nodes={teamMemberNodes}
          nodeType='teamMember'
        />
      </Container>
    </>
  );
};

export default TeamPage;
