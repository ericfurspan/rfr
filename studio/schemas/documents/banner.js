import { colorPalette } from '../../../company.js';

export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'isEnabled',
      title: 'Enabled?',
      type: 'boolean'
    },
    {
      name: 'bannerText',
      title: 'Banner text',
      type: 'blockText',
      description: 'Use this field to display a banner atop the homepage'
    },
    {
      name: 'bannerBackgroundColor',
      title: 'Background color',
      type: 'colors',
      options: {
        list: colorPalette
      }
    }
  ]
};
