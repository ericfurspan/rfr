import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import Layout from './src/containers/layout';
import './src/styles/main.scss';

library.add(fab);
library.add(fas);
library.add(far);

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.SITE_RECAPTCHA_V3_KEY || '6LfZORsaAAAAAAfQe7LgAp4qIR3N1IPYjrP6DOH9'}>
      <Layout {...props}>{element}</Layout>
    </GoogleReCaptchaProvider>
  );
};

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  );
  if (answer === true) {
    window.location.reload();
  }
};
