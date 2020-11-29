import { colorInputList } from '../../constants';

export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'bannerText',
      title: 'Banner text',
      type: 'blockText',
      description: 'Use this field to display a banner atop the homepage'
    },
    {
      name: 'backgroundColor',
      title: 'Background color',
      type: 'colors',
      options: {
        list: colorInputList
      }
    }
  ]
};
