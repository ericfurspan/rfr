export default {
  name: 'seo',
  title: 'SEO',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your website for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your website.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
  ]
};
