export default {
  name: 'podcast',
  title: 'Podcast',
  type: 'object',
  fields: [
    {
      name: 'platform',
      title: 'Platform',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Podcast Name',
      type: 'string',
      required: true
    },
    {
      name: 'subtitle',
      type: 'string'
    },
    {
      name: 'description',
      type: 'text',
      required: true,
      description:
        'What is this podcast about and why should people subscribe to it?'
    },
    {
      name: 'url',
      title: 'Link to Podcast',
      type: 'url'
    },
    {
      name: 'coverArt',
      title: 'Cover art',
      type: 'image',
      required: true
    },
    {
      name: 'icon',
      type: 'reference',
      title: 'Icon',
      description: 'FontAwesome Icon',
      to: [{ type: 'icon' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      description: 'description',
      media: 'coverArt'
    }
  }
};
