export default {
  name: 'post',
  title: 'Blog Post',
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
      name: 'publishedAt',
      title: 'Published at',
      description: 'You can use this field to set the order priority on the website',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'teamMember' }] }],
      description: 'Which team members authored this post?'
    },
    {
      name: 'coverPhoto',
      title: 'Cover photo',
      type: 'figure'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description: 'Main body of the blog post'
    }
  ],
  orderings: [
    {
      title: 'Publishing date new–>old',
      name: 'publishingDateAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }, { field: 'title', direction: 'asc' }]
    },
    {
      title: 'Publishing date old->new',
      name: 'publishingDateDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }, { field: 'title', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      image: 'image'
    },
    prepare ({ title = 'No title', publishedAt, image }) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : 'Missing publishing date',
        media: image
      };
    }
  }
};
