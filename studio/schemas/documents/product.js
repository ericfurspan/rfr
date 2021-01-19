export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'price',
      title: 'Price',
      description: 'Product price. The $ sign will be included automatically.',
      type: 'number'
    },
    {
      name: 'image',
      title: 'Product image',
      type: 'figure'
    },
    {
      name: 'link',
      title: 'Product link',
      type: 'url'
    },
    {
      name: 'linkText',
      title: 'Product Link text',
      description: 'Display text for the link',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Product Slug',
      type: 'slug',
      required: true,
      description: 'The trailing part of the URL. For example, in www.google.com/links - \'links\' is the URL slug. In most cases you should use the Generate button to auto-fill this field.',
      options: {
        source: 'title',
        maxLength: 48
      }
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
};
