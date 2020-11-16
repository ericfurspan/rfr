export default {
  name: 'payment',
  title: 'Payment',
  type: 'document',
  fields: [
    {
      name: 'body',
      title: 'External',
      type: 'array',
      of: [{ type: 'weblink' }]
    }
  ]
};
