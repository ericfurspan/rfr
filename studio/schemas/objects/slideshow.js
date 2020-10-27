export default {
  type: 'object',
  name: 'slideshow',
  title: 'Slideshow',
  fields: [
    {
      type: 'array',
      name: 'images',
      title: 'Images',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        }
      }],
      options: {
        layout: 'grid'
      }
    }
  ]
};
