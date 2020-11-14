export default {
  name: 'weblink',
  title: 'Web Link',
  type: 'object',
  fields: [
    {
      name: 'linkText',
      title: 'Link text',
      description: 'Display text for the link',
      type: 'string'
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url'
    },
    {
      name: 'icon',
      type: 'reference',
      title: 'Icon',
      description: 'An icon from FontAwesome',
      to: [{ type: 'icon' }]
    }
  ],
  preview: {
    select: {
      title: 'linkText'
    }
  }
};
