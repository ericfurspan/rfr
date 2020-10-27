export default {
  name: 'payment',
  title: 'Payment Type',
  type: 'object',
  fields: [
    {
      name: 'platform',
      title: 'Platform Name',
      type: 'string'
    },
    {
      name: 'url',
      title: 'Link to Pay',
      type: 'url'
    },
    {
      name: 'icon',
      type: 'reference',
      title: 'Icon',
      description: 'FontAwesome Icon',
      to: [{ type: 'icon' }]
    }
  ]
};
