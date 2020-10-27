export default {
  name: 'podcast',
  title: 'Podcast',
  type: 'object',
  fields: [
    {
      name: 'platformName',
      title: 'Platform',
      type: 'string'
    },
    {
      name: 'podcastName',
      title: 'Podcast Name',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Link to Podcast',
      type: 'url'
    },
    {
      name: 'icon',
      type: 'reference',
      title: 'Icon',
      description: 'FontAwesome Icon',
      to: [{ type: 'icon' }]
    }
  ]
};
