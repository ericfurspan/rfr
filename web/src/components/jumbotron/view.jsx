import React from 'react';

import { BlockContent } from '..';
import { imageUrlFor } from '../../lib/image-url';
import { buildImageObj, getUrlFromReference } from '../../lib/helpers';
import { StyledJumbotron, StyledOverlay, StyledContent, StyledLink, StyledCTAButton } from './style';

const Jumbotron = ({ backgroundImage, _rawTitle, _rawSubtitle, ctaButton, isCentered, ...rest }) => {
  return (
    <StyledJumbotron {...rest} hasImage={Boolean(backgroundImage)}>
      {backgroundImage && backgroundImage.asset && (
        <img
          src={imageUrlFor(buildImageObj(backgroundImage)).fit('fillmax').url()}
          alt={backgroundImage.alt || 'Jumbotron image'}
        />
      )}
      <StyledOverlay>
        <StyledContent isCentered={isCentered}>
          {_rawTitle && (
            <BlockContent blocks={_rawTitle} />
          )}

          {_rawSubtitle && (
            <BlockContent blocks={_rawSubtitle} />
          )}

          {ctaButton && (
            <StyledLink to={ctaButton._rawButtonLinkTo ? getUrlFromReference(ctaButton._rawButtonLinkTo) : '#'}>
              <StyledCTAButton size={ctaButton.buttonSize} rounded={ctaButton.isRounded} {...ctaButton}>
                {ctaButton.buttonText}
              </StyledCTAButton>
            </StyledLink>
          )}
        </StyledContent>
      </StyledOverlay>
    </StyledJumbotron>
  );
};

export default Jumbotron;
