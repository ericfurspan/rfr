export default {
  name: 'podcast',
  title: 'Podcasts',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Link',
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
