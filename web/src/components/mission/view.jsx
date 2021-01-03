import React from 'react';
import { Box, BlockContent, Typography, boxProps } from '..';

const Mission = ({ _rawMission, title, subtitle, ...rest }) => {
  return (
    <Box flex col ai='center' ta='center' {...boxProps(rest)}>
      <Box mb='3em'>
        <h2 css={Typography.responsiveTitle2}>
          {title}
        </h2>
        {subtitle && (
          <span css={Typography.base}>{subtitle}</span>
        )}
      </Box>
      <Box>
        <BlockContent blocks={_rawMission} />
      </Box>
    </Box>
  );
};

export default Mission;
