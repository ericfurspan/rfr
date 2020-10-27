export default {
  type: 'object',
  name: 'teamMember',
  title: 'Team Member',
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
      title: 'Contact Info',
      name: 'contactInfo',
      type: 'contactInfo'
    }
  ],
  preview: {
    select: {
      personName: 'person.name',
      certifications: 'certifications',
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
};
