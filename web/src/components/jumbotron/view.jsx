import React from 'react';

import { BlockContent } from '..';
import { imageUrlFor } from '../../lib/image-url';
import { buildImageObj, getUrlFromReference } from '../../lib/helpers';
import { StyledJumbotron, StyledContent, StyledLink, StyledCTAButton } from './style';

const Jumbotron = ({ backgroundImage, _rawTitle, _rawSubtitle, ctaButton, ...rest }) => {
  return (
    <StyledJumbotron {...rest} hasImage={Boolean(backgroundImage)}>
      {backgroundImage && backgroundImage.asset && (
        <img
          src={imageUrlFor(buildImageObj(backgroundImage)).fit('fillmax').url()}
          alt={backgroundImage.alt || 'Jumbotron image'}
        />
      )}
      <StyledContent>
        {_rawTitle && (
          <BlockContent blocks={_rawTitle} />
        )}

        {_rawSubtitle && (
          <BlockContent blocks={_rawSubtitle} />
        )}

        {ctaButton && (
          <StyledLink to={ctaButton._rawButtonLinkTo ? getUrlFromReference(ctaButton._rawButtonLinkTo) : '#'}>
            <StyledCTAButton {...ctaButton}>
              {ctaButton.buttonText}
            </StyledCTAButton>
          </StyledLink>
        )}
      </StyledContent>
    </StyledJumbotron>
  );
};

export default Jumbotron;
