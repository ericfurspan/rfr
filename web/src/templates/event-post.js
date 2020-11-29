import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../containers/seo';
import { EventPost } from '../components';

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
        _id
        slug {
          current
        }
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

const EventPostTemplate = (props) => {
  const { data } = props;
  const event = data && data.event;

  return (
    <>
      {event && <SEO title={event.title || 'Untitled'} />}
      {event && <EventPost {...event} />}
    </>
  );
};

export default EventPostTemplate;
