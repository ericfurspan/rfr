import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { TeamMember } from '../components';

export const query = graphql`
  query TeamMemberTemplateQuery($id: String!) {
    teamMember: sanityTeamMember(id: { eq: $id }) {
      id
      certifications
      slug {
        current
      }
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
`;

const TeamMemberTemplate = ({ data, errors }) => {
  const teamMember = data && data.teamMember;

  return (
    <>
      {teamMember && <SEO title={teamMember.person.name || 'Untitled'} />}
      {teamMember && <TeamMember {...teamMember} />}
    </>
  );
};

export default TeamMemberTemplate;
