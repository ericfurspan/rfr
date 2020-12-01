import { Link } from 'gatsby';
import React from 'react';
import { Container, Typography } from '../components';
import SEO from '../containers/seo';

const Success = () => (
  <>
    <SEO title='Feedback' />
    <Container>
      <h2 css={Typography.responsiveTitle2}>
        Thanks for your interest!
      </h2>
      <p css={Typography.base}>
        Stay tuned, you should hear from us soon
      </p>

      <br />
      <Link to='/' css={Typography.base}>Back to Home</Link>
    </Container>
  </>
);

export default Success;
