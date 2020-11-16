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
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      description: 'Sets the order by which the content will appear (ascending)',
      validation: Rule => Rule.min(1).integer().positive()
    }
  ]
};
