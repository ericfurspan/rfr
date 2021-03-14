import React from 'react';
import LazyLoad from 'react-lazyload';
import { buildImageObj } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import { Typography, Box, BackBtn, BlockContent } from '..';
import { StyledImgAvatar } from './style';

const SuccessStory = ({ title, _rawText, image, slug }) => {
  return (
    <>
      <Box mb='4rem'>
        <BackBtn linkTo='/success-stories' linkText='All success stories' />
      </Box>

      <div>
        <h2 css={Typography.responsiveTitle2}>
          {title}
        </h2>

        <Box mt='2rem' ai='center' grid gtc='auto 1fr' gcg='2rem' grg='2rem' gridResponsive>
          {image && image.asset && (
            <LazyLoad height={200} once>
              <StyledImgAvatar
                src={imageUrlFor(buildImageObj(image))
                  .width(200)
                  .dpr(3)
                  .format('webp')
                  .url()}
                alt='Avatar of story author'
              />
            </LazyLoad>
          )}

          {_rawText && <BlockContent blocks={_rawText} />}
        </Box>
      </div>
    </>
  );
};

export default SuccessStory;
