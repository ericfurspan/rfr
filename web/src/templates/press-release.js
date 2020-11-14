import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import PressRelease from '../components/press-release/item';
import SEO from '../components/seo';
import Layout from '../containers/layout';

export const query = graphql`
  query PressReleaseTemplateQuery($id: String!) {
    pressRelease: sanityPressRelease(id: { eq: $id }) {
      id
      title
      source
      url
      _rawExcerpt
      publishedAt
      slug {
        current
      }
    }
  }
`;

const PressReleaseTemplate = props => {
  const { data, errors } = props;
  const pressRelease = data && data.pressRelease;

  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {pressRelease && <SEO title={pressRelease.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {pressRelease && <PressRelease {...pressRelease} />}
    </Layout>
  );
};

export default PressReleaseTemplate;
