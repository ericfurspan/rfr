import { colorInputList } from '../../constants';

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
      type: 'colors',
      title: 'Button Text Color',
      options: {
        list: colorInputList
      }
    },
    {
      name: 'buttonBgColor',
      type: 'colors',
      title: 'Button Background Color',
      options: {
        list: colorInputList
      }
    },
    {
      name: 'buttonLinkTo',
      type: 'reference',
      title: 'Button Link',
      description: 'Link to an internal page',
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
