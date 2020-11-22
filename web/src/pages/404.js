import React from 'react';

import SEO from '../containers/seo';
import { Container, Typography } from '../components';

const NotFoundPage = () => (
  <>
    <SEO title='404: Not found' />
    <Container>
      <h1 css={Typography.responsiveTitle1}>Page not found 🙁</h1>
      <p>You just hit a route that doesn&#39;t exist. Go back, or navigate via the above links.</p>
    </Container>
  </>
);

export default NotFoundPage;
