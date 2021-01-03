import { colorPalette } from '../../../company.js';

export default {
  name: 'theme',
  title: 'Theme',
  type: 'document',
  fields: [
    {
      name: 'navMenuBg',
      title: 'Navigation Menu Background',
      type: 'colors',
      description: 'The background color of the nav menu',
      options: {
        list: colorPalette
      }
    },
    {
      name: 'navMenuFg',
      title: 'Navigation Menu Foreground',
      type: 'colors',
      description: 'The foreground color of the nav menu items',
      options: {
        list: colorPalette
      }
    },
    {
      name: 'footerBg',
      title: 'Footer Background',
      type: 'colors',
      description: 'The background color of the footer',
      options: {
        list: colorPalette
      }
    },
    {
      name: 'footerFg',
      title: 'Footer Foreground',
      type: 'colors',
      description: 'The foreground color of the footer',
      options: {
        list: colorPalette
      }
    }
  ]
};
