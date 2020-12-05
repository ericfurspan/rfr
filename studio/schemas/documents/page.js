export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  liveEdit: false,
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'isCentered',
      title: 'Centered?',
      type: 'boolean',
      description: 'Whether the contents of the page should be centered'
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      description: 'Sets the order by which the page link will appear in the navigation bar (ascending)',
      validation: Rule => Rule.min(1).integer().positive()
    }
  ],
  preview: {
    select: {
      title: 'body'
    }
  }
};
