export default {
  name: 'companyInfo',
  title: 'Company',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string'
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
    },
    {
      name: 'gallery',
      title: 'Photo Gallery',
      type: 'slideshow'
    },
    {
      name: 'payments',
      title: 'Accepted Payments',
      type: 'array',
      of: [{ type: 'payment' }]
    },
    {
      name: 'podcasts',
      title: 'Podcasts',
      type: 'array',
      of: [{ type: 'podcast' }]
    }
  ],
  preview: {
    select: {
      title: 'companyName',
      media: 'logo'
    }
  }
};
