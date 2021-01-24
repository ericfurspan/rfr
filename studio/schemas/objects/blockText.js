import { FaExternalLinkAlt, FaLink, FaPalette, FaTextHeight } from 'react-icons/fa';
import { colorPalette } from '../../../company.js';

export default {
  name: 'blockText',
  title: 'Block Text',
  type: 'array',
  description: 'Add your content in the rich text editor below',
  liveEdit: true,
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Small', value: 'small' },
        { title: 'Normal', value: 'normal' },
        { title: 'Large', value: 'large' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' }
        ],
        annotations: [
          {
            name: 'spacer',
            type: 'object',
            title: 'Vertical spacing',
            blockEditor: {
              icon: FaTextHeight
            },
            fields: [
              {
                name: 'value',
                type: 'number',
                title: 'Number of pixels of vertical space',
                options: {
                  list: [ 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48 ]
                }
              }
            ]
          },
          {
            name: 'color',
            type: 'object',
            title: 'Color',
            blockEditor: {
              icon: FaPalette
            },
            fields: [
              {
                name: 'fontColor',
                type: 'colors',
                title: 'Font Color',
                options: {
                  list: colorPalette
                }
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            blockEditor: {
              icon: FaLink
            },
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'post' },
                  { type: 'event' },
                  { type: 'pressRelease' },
                  { type: 'page' }
                ]
              }
            ]
          },
          {
            title: 'External Link',
            name: 'link',
            type: 'object',
            blockEditor: {
              icon: FaExternalLinkAlt
            },
            fields: [
              {
                title: 'External link',
                name: 'externalLink',
                type: 'url',
                validation: Rule =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ['https', 'http', 'mailto', 'tel']
                  })
              },
              {
                title: 'Open in new tab',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean'
              }
            ]
          }
        ]
      }
    }
  ]
};
