// Load variables from `.env` as soon as possible
require('dotenv').config();

const company = require('../company');
const clientConfig = require('./client-config');
const token = process.env.SANITY_READ_TOKEN;

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
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: clientConfig.analytics.trackingId,
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
        name: company.name,
        short_name: company.shortName,
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
