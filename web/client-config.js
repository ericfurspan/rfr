module.exports = {
  sanity: {
    projectId: process.env.GATSBY_SANITY_PROJECT_ID || '3z70jizc',
    dataset: process.env.GATSBY_SANITY_DATASET || 'development',
  },
  services: {
    gaTrackingId: process.env.GA_TRACKING_ID || 'UA-146550062-3',
  },
};
