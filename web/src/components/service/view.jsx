import React from 'react';

import { BlockContent } from '../block-content';
import { Typography } from '..';

import { StyledWrapper, StyledTitle, StyledContent } from './style';

const Service = ({ title, _rawSubtitle, _rawBody, preview }) => {
  return (
    <StyledWrapper>
      <StyledTitle css={Typography.responsiveTitle3}>
        {title}
      </StyledTitle>

      {_rawSubtitle && (
        <BlockContent blocks={_rawSubtitle} />
      )}

      {!preview && (
        <StyledContent>
          {_rawBody && (
            <BlockContent blocks={_rawBody} />
          )}
        </StyledContent>
      )}
    </StyledWrapper>
  );
};

export default Service;
