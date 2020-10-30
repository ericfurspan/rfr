export default {
  name: 'seo',
  title: 'SEO',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      required: true
    },
    {
      name: 'description',
      type: 'text',
      title: 'Site Description',
      description: 'Describe your website for search engines and social media.',
      required: true
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
    }
  ]
};
