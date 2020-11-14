import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '../components/block-content';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import Layout from '../containers/layout';
import { responsiveTitle1 } from '../components/typography.module.css';
import { mapEdgesToNodes } from '../lib/helpers';

export const query = graphql`
  query ServicesPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)services/" }) {
      title
      _rawBody
    }
    services: allSanityService {
      edges {
        node {
          id
          title
          _rawBody
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

const ServicesPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = data && data.page;
  const servicesNodes = (data || {}).services ? mapEdgesToNodes(data.services) : [];

  console.log('page', page);
  console.log('servicesNodes', servicesNodes);

  if (!page) {
    throw new Error(
      'Missing "Services" page data. Open the studio at http://localhost:3333 and add "Services" page data then restart the development server.'
    );
  }

  // todo: render servicesNodes into card-like components

  return (
    <Layout>
      <SEO title={page.title} />
      <Container>
        <h1 className={responsiveTitle1}>{page.title}</h1>
        <BlockContent blocks={page._rawBody || []} />
      </Container>
    </Layout>
  );
};

export default ServicesPage;
