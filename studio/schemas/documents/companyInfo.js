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
      type: 'blockText'
    },
    {
      name: 'banner',
      title: 'Banner',
      type: 'string',
      description: 'Use this to display an attention banner atop the website'
    },
    {
      name: 'contact',
      title: 'Contact Info',
      type: 'contactInfo'
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
