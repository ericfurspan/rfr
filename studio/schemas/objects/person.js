export default {
  name: 'person',
  type: 'object',
  title: 'Person',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'blockContent'
    },
    {
      title: 'Contact',
      name: 'contact',
      type: 'contactInfo'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
};
