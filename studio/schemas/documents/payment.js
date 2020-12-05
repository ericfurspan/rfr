export default {
  name: 'payment',
  title: 'Payment',
  type: 'document',
  fields: [
    {
      name: 'payExternal',
      title: 'External Payment Methods',
      type: 'array',
      of: [{ type: 'weblink' }]
    }
  ]
};
