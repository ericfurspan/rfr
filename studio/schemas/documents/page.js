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
    }
  ],
  preview: {
    select: {
      title: 'body'
    }
  }
};
