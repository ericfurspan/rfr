export default {
  name: 'companyInfo',
  title: 'Company',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
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
      type: 'blockText'
    },
    {
      name: 'contact',
      title: 'Contact Info',
      type: 'contactInfo'
    },
    {
      name: 'banner',
      title: 'Banner',
      type: 'string',
      description: 'Use this to show an attention banner atop the website'
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
