export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [
    {
      name: 'email',
      title: 'Email Address',
      type: 'string'
    },
    {
      type: 'array',
      name: 'socialMedia',
      description: 'Add links to your social media',
      of: [
        {
          title: 'Platform',
          type: 'socialMedia'
        }
      ]
    }
  ]
};
