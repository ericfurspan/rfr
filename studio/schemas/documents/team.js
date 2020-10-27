export default {
  name: 'team',
  title: 'Team Members',
  type: 'document',
  fields: [
    {
      title: 'Person',
      name: 'person',
      type: 'reference',
      to: { type: 'person' }
    },
    {
      title: 'Certifications',
      name: 'certifications',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      title: 'Rank',
      name: 'rank',
      type: 'number',
      description: 'Use this to set the ordering of team members on the site',
      validation: Rule => Rule.required().min(1).max(100)
    }
  ],
  preview: {
    select: {
      personName: 'person.name',
      rank: 'rank',
      media: 'person.image'
    },
    prepare (data) {
      return {
        ...data,
        title: data.personName,
        subtitle: data.certifications && data.certifications.join(', ')
      };
    }
  }
}