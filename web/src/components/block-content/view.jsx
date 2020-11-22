import React from 'react';
import BaseBlockContent from '@sanity/block-content-to-react';

import { Figure, Slideshow } from './components';
import { Typography } from '..';

const serializers = {
  types: {
    block (props) {
      switch (props.node.style) {
        case 'h1':
          return <h1 css={Typography.responsiveTitle1}>{props.children}</h1>;

        case 'h2':
          return <h2 css={Typography.responsiveTitle2}>{props.children}</h2>;

        case 'h3':
          return <h3 css={Typography.responsiveTitle3}>{props.children}</h3>;

        case 'h4':
          return <h4 css={Typography.responsiveTitle4}>{props.children}</h4>;

        case 'blockquote':
          return <blockquote css={Typography.blockQuote}>{props.children}</blockquote>;

        default:
          return <p css={Typography.paragraph}>{props.children}</p>;
      }
    },
    figure (props) {
      return <Figure {...props.node} />;
    },
    slideshow (props) {
      return <Slideshow {...props.node} />;
    }
  }
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
