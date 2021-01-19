import React from 'react';
import { Link } from 'gatsby';
import { buildImageObj, getProductUrl } from '../../lib/helpers';
import { imageUrlFor } from '../../lib/image-url';
import { BackBtn } from '..';
import { StyledProduct, StyledImageContainer, StyledContent, StyledTitle, StyledCaption, StyledPrice, StyledProductLink, StyledDescription } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = ({ title, caption, description, image, link, linkText, price, slug, previewMode = false }) => {
  return (
    <>
      {!previewMode && <BackBtn linkTo='/merchandise' linkText='All items' />}

      <StyledProduct previewMode={previewMode}>
        <Link to={getProductUrl(slug)}>
          <StyledImageContainer>
            {image && image.asset ? (
              <img
                src={imageUrlFor(buildImageObj(image)).url()}
                alt={image.alt || `Product preview image`}
              />
            ) : (
              <FontAwesomeIcon icon={['fas', 'image']} />
            )}
          </StyledImageContainer>
        </Link>

        <StyledContent>
          <StyledTitle>
            <Link to={getProductUrl(slug)}>{title}</Link>
          </StyledTitle>

          <StyledCaption>{caption}</StyledCaption>

          <StyledPrice>{price.toFixed(2)}</StyledPrice>

          <StyledProductLink href={link} target='_blank' rel='noreferrer noopener'>
            {linkText}
          </StyledProductLink>

          {description && <StyledDescription>{description}</StyledDescription>}

        </StyledContent>
      </StyledProduct>
    </>
  );
};

export default Product;
