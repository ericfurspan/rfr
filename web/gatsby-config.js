// Load variables from `.env` as soon as possible
require('dotenv').config();

const clientConfig = require('./client-config');
const token = process.env.SANITY_READ_TOKEN;

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ['./src/styles'],
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ['SITE_RECAPTCHA_KEY'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Reps for Responders`,
        short_name: `RFR`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#202123`,
        display: `standalone`,
        icon: `src/static/logo.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
};
