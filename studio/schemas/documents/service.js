export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'blockText'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'icon',
      type: 'reference',
      title: 'Icon',
      description: 'An icon from FontAwesome',
      to: [{ type: 'icon' }]
    }
  ]
};
