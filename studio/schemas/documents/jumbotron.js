import { colorPalette } from '../../../company.js';

export default {
  name: 'jumbotron',
  title: 'Jumbotron',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'blockText',
      description: 'Primary text - an H1 style would be appropriate here'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'blockText',
      description: 'Secondary text'
    },
    {
      name: 'ctaButton',
      title: 'Call to Action Button',
      type: 'button',
      description: 'The primary button. Consider: if a user takes just one action on your page, what would you want it to be?'
    },
    {
      name: 'isCentered',
      title: 'Centered content',
      description: 'Should the text and button be centered?',
      type: 'boolean'
    },
    {
      name: 'backgroundColor',
      title: 'Background color',
      type: 'colors',
      description: 'The background color of the jumbotron',
      options: {
        list: colorPalette
      }
    },
    {
      name: 'backgroundImage',
      title: 'Background image',
      description: 'A background image (cover photo) for the jumbotron',
      type: 'figure'
    },
    {
      name: 'backgroundOpacity',
      title: 'Background image opacity',
      type: 'number',
      description: 'The opacity of the background image (between 0-1). The default value of 1 produces no transparency.',
      validation: Rule => Rule.min(0.1).max(1.0).required(),
      options: {
        list: [1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1]
      }
    },
    {
      name: 'headerTextColor',
      title: 'Header text color',
      type: 'colors',
      description: 'Text color of the website title in the header. If using a dark background color or a background image, you probably want to set this to a lighter color.',
      options: {
        list: colorPalette
      }
    }
  ],
  initialValue: {
    backgroundOpacity: 1.0
  }
};
