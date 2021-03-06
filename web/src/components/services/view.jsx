import { Link } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { imageUrlFor } from '../../lib/image-url';
import { buildImageObj } from '../../lib/helpers';
import { Box, Typography, boxProps, BlockContent, StyledButton } from '..';
import { StyledHeading, StyledGrid, StyledIconContainer, StyledService, StyledServiceBody, StyledImageContainer, StyledBrowseMore } from './style';

const Services = ({ title, subtitle, nodes, browseMoreHref, browseMoreText, image, previewMode, ...rest }) => {
  return (
    <Box ta='center' {...boxProps(rest)}>
      {image && image.asset && (
        <StyledImageContainer>
          <img
            src={imageUrlFor(buildImageObj(image))
              .format('webp')
              .url()}
            alt={image.alt || `Services image`}
          />
        </StyledImageContainer>
      )}
      {title && (
        <StyledHeading hasSubtitle={!!subtitle}>
          <h2 css={Typography.title2}>
            {title}
          </h2>
          {subtitle && (
            <span css={Typography.base}>{subtitle}</span>
          )}
        </StyledHeading>
      )}

      <StyledGrid>
        {nodes && nodes.map((node) => (
          <li key={node.id}>
            <Link to={browseMoreHref}>
              <StyledService>
                {node.icon && (
                  <StyledIconContainer>
                    <FontAwesomeIcon icon={[node.icon.faPackage, node.icon.faIconName]} />
                  </StyledIconContainer>
                )}

                <h3 css={Typography.responsiveTitle3}>
                  {node.title}
                </h3>

                {node._rawSubtitle && (
                  <BlockContent blocks={node._rawSubtitle} />
                )}

                {!previewMode && (
                  <StyledServiceBody>
                    {node._rawBody && (
                      <BlockContent blocks={node._rawBody} />
                    )}
                  </StyledServiceBody>
                )}
              </StyledService>
            </Link>
          </li>
        ))}
      </StyledGrid>

      <Box mt='3rem'>
        <span css={Typography.title3} style={{ fontWeight: '500' }}>
          Interested in any of our Services?
        </span>
        <br />
        <Link to='/contact'>
          <StyledButton design='text' size='large'>
            Email us to find out more!
          </StyledButton>
        </Link>
      </Box>
      {browseMoreHref && (
        <StyledBrowseMore css={Typography.small}>
          <Link to={browseMoreHref}>{browseMoreText}</Link>
        </StyledBrowseMore>
      )}
    </Box>
  );
};

Services.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: '',
  browseMoreText: '',
  previewMode: false,
};

export default Services;
