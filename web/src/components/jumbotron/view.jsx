import React from 'react';
import LazyLoad from 'react-lazyload';
import { BlockContent } from '..';
import { imageUrlFor } from '../../lib/image-url';
import { buildImageObj, getUrlFromReference } from '../../lib/helpers';
import { StyledJumbotron, StyledOverlay, StyledContent, StyledLink, StyledCTAButton } from './style';

const Jumbotron = ({ backgroundImage, _rawTitle, _rawSubtitle, ctaButton, isCentered, backgroundColor, backgroundOpacity }) => {
  const hasBgImage = Boolean(backgroundImage && backgroundImage.asset);

  return (
    <StyledJumbotron
      hasBgImage={hasBgImage}
      backgroundColor={backgroundColor}
      backgroundOpacity={backgroundOpacity}
    >
      {hasBgImage && (
        <LazyLoad once>
          <img
            src={imageUrlFor(buildImageObj(backgroundImage)).fit('fillmax').format('webp').url()}
            alt={backgroundImage.alt || 'Jumbotron image'}
            className='jumbo-bg'
          />
        </LazyLoad>
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
