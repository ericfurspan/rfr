export default {
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'source',
      title: 'News Source',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Link to story',
      type: 'url'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'You can use this field to set the order priority on the website'
    }
  ]
};
