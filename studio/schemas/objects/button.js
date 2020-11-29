
export default {
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    {
      name: 'buttonText',
      type: 'string',
      title: 'Button Text'
    },
    {
      name: 'buttonTextColor',
      type: 'color',
      title: 'Button Text Color'
    },
    {
      name: 'buttonBgColor',
      type: 'color',
      title: 'Button Background Color'
    },
    {
      name: 'buttonLinkTo',
      type: 'reference',
      title: 'Button Link',
      to: [
        { type: 'post' },
        { type: 'event' },
        { type: 'pressRelease' },
        { type: 'page' }
      ]
    },
    {
      name: 'buttonSize',
      type: 'string',
      title: 'Button Size',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Large', value: 'large' },
          { title: 'Normal', value: 'normal' }
        ]
      }
    }
  ]
};
