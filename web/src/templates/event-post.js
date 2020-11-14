import React from 'react';
import { graphql } from 'gatsby';
import Container from '../components/container';
import GraphQLErrorList from '../components/graphql-error-list';
import EventPost from '../components/event/post';
import SEO from '../components/seo';
import Layout from '../containers/layout';

export const query = graphql`
  query EventPostTemplateQuery($id: String!) {
    event: sanityEvent(id: { eq: $id }) {
      id
      eventAt
      coverPhoto {
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
        alt
      }
      title
      slug {
        current
      }
      _rawBody
      organizers {
        _key
        person {
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
          name
        }
      }
    }
  }
`;

const EventPostTemplate = props => {
  const { data, errors } = props;
  const event = data && data.event;

  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {event && <SEO title={event.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {event && <EventPost {...event} />}
    </Layout>
  );
};

export default EventPostTemplate;
