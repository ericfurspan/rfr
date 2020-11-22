export default {
  type: 'document',
  name: 'teamMember',
  title: 'Team Member',
  fields: [
    {
      title: 'Person',
      name: 'person',
      type: 'person',
      required: true
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
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      required: true,
      description: 'The trailing part of the URL. For example, in www.google.com/links - \'links\' is the URL slug. In most cases you should use the Generate button to auto-fill this field.',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      description: 'Used to set the display order',
      validation: Rule => Rule.min(1).integer().positive()
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
