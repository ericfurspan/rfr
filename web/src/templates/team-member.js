import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import TeamMember from '../components/team-member/team-member';
import SEO from '../components/seo';
import Layout from '../containers/layout';

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
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {teamMember && <SEO title={teamMember.person.name || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {teamMember && <TeamMember {...teamMember} />}
    </Layout>
  );
};

export default TeamMemberTemplate;
