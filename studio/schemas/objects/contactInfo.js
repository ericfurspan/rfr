export default {
  name: 'contactInfo',
  type: 'object',
  title: 'Contact Info',
  fields: [
    {
      name: 'email',
      title: 'Email Address',
      type: 'string'
    },
    {
      type: 'array',
      name: 'socialMedia',
      of: [
        {
          title: 'Platform',
          type: 'weblink'
        }
      ]
    }
  ]
};
