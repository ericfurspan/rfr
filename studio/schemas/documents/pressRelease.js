export default {
  name: 'pressRelease',
  title: 'Press Release',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      required: true
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      required: true,
      description: 'The trailing part of the URL. For example, in www.google.com/links - \'links\' is the URL slug. In most cases you should use the Generate button to auto-fill this field.',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'Who published this story?'
    },
    {
      name: 'url',
      title: 'Link to story',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'blockText'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'You can use this field to set the order priority on the website',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'source'
    }
  }
};
