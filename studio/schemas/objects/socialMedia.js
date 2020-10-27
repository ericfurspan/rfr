export default {
  name: 'socialMedia',
  title: 'Social Media',
  type: 'object',
  fields: [
    {
      title: 'Platform Name',
      name: 'platformName',
      type: 'string'
    },
    {
      title: 'URL',
      name: 'url',
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
