export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      required: true
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'eventAt',
      title: 'Date & Time',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'organizers',
      title: 'Organizers',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'teamMember' }] }],
      description: 'Which team members are involved?'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'coverPhoto',
      title: 'Cover photo',
      type: 'figure'
    }
  ]
};
