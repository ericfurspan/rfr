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
      title: 'Date Published',
      type: 'date'
    }
  ]
};
