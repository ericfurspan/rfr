import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { Box, Container, TeamMember } from '../components';

export const query = graphql`
  query TeamMemberTemplateQuery($id: String!) {
    teamMember: sanityTeamMember(id: { eq: $id }) {
      id
      certifications
      slug {
        current
      }
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
`;

const TeamMemberTemplate = ({ data }) => {
  const { teamMember } = (data || {});

  return (
    <Container noPadding>
      {teamMember && <SEO title={teamMember.person.name || 'Untitled Team Member'} />}
      {teamMember && (
        <Box mt='6em'>
          <TeamMember {...teamMember} />
        </Box>
      )}
    </Container>
  );
};

export default TeamMemberTemplate;
