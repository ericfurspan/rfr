export default {
  name: 'review',
  title: 'Reviews',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'blockText'
    },
    {
      name: 'reviewer',
      title: 'Reviewer',
      type: 'string'
    }
  ]
};
