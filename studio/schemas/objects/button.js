import { colorPalette } from '../../../company.js';

export default {
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    {
      name: 'buttonText',
      type: 'string',
      title: 'Text'
    },
    {
      name: 'buttonBgColor',
      type: 'colors',
      title: 'Background Color',
      options: {
        list: colorPalette
      }
    },
    {
      name: 'buttonTextColor',
      type: 'colors',
      title: 'Text Color',
      options: {
        list: colorPalette
      }
    },
    {
      name: 'buttonLinkTo',
      type: 'reference',
      title: 'Button Link',
      description: 'You may link to an internal page',
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
          { title: 'X-Large', value: 'xlarge' }
        ]
      }
    },
    {
      name: 'isRounded',
      title: 'Rounded button',
      type: 'boolean'
    }
  ]
};
