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
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'icon',
      type: 'reference',
      title: 'Icon',
      description: 'A representative Icon',
      to: [{ type: 'icon' }]
    }
  ]
};
