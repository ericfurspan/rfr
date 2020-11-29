import { FaExternalLinkAlt, FaAlignJustify, FaLink, FaPalette } from 'react-icons/fa';
import { colorInputList } from '../../constants';

export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Small', value: 'small' },
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'Quote', value: 'blockquote' }
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' }
        ],
        annotations: [
          {
            name: 'layout',
            type: 'object',
            title: 'Layout',
            blockEditor: {
              icon: FaAlignJustify
            },
            fields: [
              {
                name: 'textAlign',
                type: 'string',
                title: 'Text align',
                options: {
                  list: [{ title: 'Left', value: 'left' }, { title: 'Center', value: 'center' }, { title: 'Right', value: 'right' }]
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
                  list: colorInputList
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
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'figure'
    },
    {
      type: 'slideshow'
    }
  ]
};
