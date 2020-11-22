export default {
  name: 'contactInfo',
  type: 'object',
  title: 'Contact',
  fields: [
    {
      name: 'email',
      title: 'Email Address',
      type: 'string'
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
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
