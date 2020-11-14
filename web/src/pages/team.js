import React from 'react';
import { graphql } from 'gatsby';
import { mapEdgesToNodes } from '../lib/helpers';
import TeamMemberPreviewGrid from '../components/team-member/team-member-preview-grid';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';

import { responsiveTitle1 } from '../components/typography.module.css';

export const query = graphql`
  query TeamPageQuery {
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
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const teamMemberNodes = data && data.teamMembers && mapEdgesToNodes(data.teamMembers);

  return (
    <Layout>
      <SEO title='Team' />
      <Container>
        <h1 className={responsiveTitle1}>Our Team</h1>
        {teamMemberNodes && teamMemberNodes.length > 0 && (
          <TeamMemberPreviewGrid nodes={teamMemberNodes} />
        )}
      </Container>
    </Layout>
  );
};

export default TeamPage;
