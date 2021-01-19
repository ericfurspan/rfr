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
      title: 'URL Slug',
      type: 'slug',
      required: true,
      description: 'The trailing part of the URL. For example, in www.google.com/links - \'links\' is the URL slug. In most cases you should use the Generate button to auto-fill this field.',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
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
  ],
  preview: {
    select: {
      title: 'title',
      eventAt: 'eventAt'
    },
    prepare ({ title = 'No title', eventAt }) {
      return {
        title,
        subtitle: eventAt
          ? new Date(eventAt).toLocaleDateString()
          : 'Missing event date'
      };
    }
  }
};
