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
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true
    }
  ],
  orderings: [
    {
      title: 'Order high->low',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'Order low->high',
      name: 'orderDesc',
      by: [{ field: 'order', direction: 'desc' }]
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
