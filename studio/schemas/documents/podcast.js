export default {
  name: 'podcast',
  title: 'Podcast',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      required: true
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      description: 'A description of the podcast'
    },
    {
      name: 'availablePlatforms',
      title: 'Available Platforms',
      type: 'array',
      of: [{ type: 'weblink' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    }
  }
};
