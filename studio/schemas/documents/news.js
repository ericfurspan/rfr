export default {
  name: 'news',
  type: 'document',
  title: 'News',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Link',
      type: 'url'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'You can use this field to set the ordering on the website'
    }
  ]
};
