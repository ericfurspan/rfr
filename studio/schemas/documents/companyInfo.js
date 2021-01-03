export default {
  name: 'companyInfo',
  title: 'Company',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Name',
      type: 'string',
      required: true
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string'
    },
    {
      name: 'mission',
      title: 'Mission Statement',
      type: 'blockContent'
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'contactInfo'
    },
    {
      name: 'faq',
      title: 'Frequently Asked Questions',
      type: 'array',
      of: [{ type: 'faq' }]
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true }
    }
  ],
  preview: {
    select: {
      title: 'companyName',
      media: 'logo'
    }
  }
};
