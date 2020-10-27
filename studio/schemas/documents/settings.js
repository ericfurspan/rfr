export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'businessName',
      title: 'Business Name',
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
      type: 'simplePortableText'
    },
    {
      name: 'banner',
      title: 'Banner',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'figure'
    }
  ],
  preview: {
    select: {
      title: 'businessName',
      media: 'logo'
    }
  }
};
