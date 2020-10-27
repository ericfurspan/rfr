import React from 'react';
import { graphql } from 'gatsby';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import SEO from '../components/seo';
import News from '../components/news';
import Podcasts from '../components/podcasts';
import Layout from '../containers/layout';
import { mapEdgesToNodes } from '../lib/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fab);
library.add(fas);

export const query = graphql`
  query IndexPageQuery {
    seo: sanitySeo {
      title
      description
      keywords
    }
    settings: sanitySettings(_id: {regex: "/(drafts.|)settings/"}) {
      businessName
      caption
      banner
    }
    podcasts: allSanityPodcast {
      edges {
        node {
         title
         url
         icon {
          name
          faPackage
          faIconName
         }
        }
      }
    }
    news: allSanityNews {
     edges {
       node {
        source
        title
        url
       }
     }
    }
  }
`;

const IndexPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const settings = (data || {}).settings;
  if (!settings) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const newsNodes = (data || {}).news ? mapEdgesToNodes(data.news) : [];
  const podcastNodes = (data || {}).podcasts ? mapEdgesToNodes(data.podcasts) : [];

  console.log(data);

  return (
    <Layout>
      <SEO title={data.seo.title} description={data.seo.description} keywords={data.seo.keywords} />
      <Container>
        <h1 hidden>{data.seo.title}</h1>

        <News items={newsNodes} title='In the Media' />
        <Podcasts items={podcastNodes} title='Podcast: Inside the Labyrinth' subtitle='Available on the following platforms' />
      </Container>
    </Layout>
  );
};

export default IndexPage;
