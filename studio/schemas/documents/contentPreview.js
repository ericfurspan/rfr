export default {
  name: 'contentPreview',
  title: 'Content Preview',
  type: 'document',
  fields: [
    {
      name: 'shouldRender',
      title: 'Display on homepage',
      description: 'Uncheck this to hide the content from the homepage. If unchecked, the rest of the settings have no effect.',
      type: 'boolean'
    },
    {
      name: 'headingText',
      title: 'Heading text',
      type: 'string'
    },
    {
      name: 'browseMoreText',
      title: 'Browse more text',
      description: 'The text of the link to the content page, i.e "See all News & Updates"',
      type: 'string'
    }
  ],
  initialValue: {
    shouldRender: true,
    browseMoreText: 'View more'
  }
};
