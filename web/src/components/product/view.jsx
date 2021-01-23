import React from 'react';
import { Link } from 'gatsby';
import LazyLoad from 'react-lazyload';
import { buildImageObj, getProductUrl } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import { BackBtn, Box, Typography } from '..';
import { StyledProduct, StyledImageContainer, StyledContent, StyledTitle, StyledCaption, StyledPrice, StyledProductLink, StyledDescription } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = ({ title, caption, description, image, link, linkText, price, slug, previewMode = false }) => {
  return (
    <>
      {!previewMode && (
        <Box mb='4rem'>
          <BackBtn linkTo='/merchandise' linkText='All merchandise' />
        </Box>
      )}

      <StyledProduct previewMode={previewMode}>
        <Link to={getProductUrl(slug)} aria-label={`Preview image for product: ${title}`}>
          <StyledImageContainer>
            {image && image.asset ? (
              <LazyLoad height={300} style={{ display: 'flex' }} once>
                <img
                  src={imageUrlFor(buildImageObj(image))
                    .format('webp')
                    .width(300)
                    .height(300)
                    .url()
                  }
                  alt={image.alt || `Product preview image`}
                />
              </LazyLoad>
            ) : (
              <FontAwesomeIcon icon={['fas', 'image']} />
            )}
          </StyledImageContainer>
        </Link>

        <StyledContent>
          <StyledTitle css={Typography.responsiveTitle3}>
            <Link to={getProductUrl(slug)}>{title}</Link>
          </StyledTitle>

          {caption && <StyledCaption>{caption}</StyledCaption>}

          {price && <StyledPrice>{price.toFixed(2)}</StyledPrice>}

          {link && (
            <StyledProductLink href={link} target='_blank' rel='noreferrer noopener'>
              {linkText}
            </StyledProductLink>
          )}

          {description && <StyledDescription>{description}</StyledDescription>}

        </StyledContent>
      </StyledProduct>
    </>
  );
};

export default Product;
