export default {
  name: 'faq',
  type: 'object',
  title: 'Frequently Asked Question',
  fields: [

    {
      name: 'question',
      title: 'Question',
      type: 'text',
      required: true
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
      required: true
    }
  ],
  preview: {
    select: {
      title: 'question'
    }
  }
};
