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
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the post',
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
  ]
};
