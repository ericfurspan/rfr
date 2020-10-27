import S from '@sanity/desk-tool/structure-builder';
import { FaAddressCard, FaIcons, FaSearchengin, FaCog, FaImages, FaUsers, FaNewspaper, FaThumbsUp, FaDonate, FaPodcast } from 'react-icons/fa';

const hiddenDocTypes = listItem =>
  !['seo', 'settings', 'team', 'gallery', 'person', 'news', 'icon', 'contact', 'review', 'podcast', 'donation']
    .includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('SEO')
        .child(
          S.editor()
            .id('seo')
            .schemaType('seo')
            .documentId('seo')
        )
        .icon(FaSearchengin),      
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('settings')
            .schemaType('settings')
            .documentId('settings')
        )
        .icon(FaCog),
      S.listItem()
        .title('Contact')
        .child(
          S.editor()
            .id('contact')
            .schemaType('contact')
            .documentId('contact')
            .title('Contact Info')
        )
        .icon(FaAddressCard),        
      S.listItem()
        .title('News')
        .schemaType('news')
        .child(S.documentTypeList('news').title('News'))
        .icon(FaNewspaper),
      S.listItem()
        .title('Reviews')
        .schemaType('review')
        .child(S.documentTypeList('review').title('Reviews'))
        .icon(FaThumbsUp),
      S.listItem()
        .title('Icons')
        .schemaType('icon')
        .child(S.documentTypeList('icon').title('Icons'))
        .icon(FaIcons),
      S.listItem()
        .title('Donations')
        .schemaType('donation')
        .child(S.documentTypeList('donation').title('Donations'))
        .icon(FaDonate),
      S.listItem()
        .title('Podcasts')
        .schemaType('podcast')
        .child(S.documentTypeList('podcast').title('Podcasts'))
        .icon(FaPodcast),           
      S.listItem()
        .title('Team')
        .schemaType('team')
        .child(S.documentTypeList('team').title('Team'))
        .icon(FaUsers),
      S.listItem()
        .title('Gallery')
        .schemaType('gallery')
        .child(S.documentTypeList('gallery').title('Gallery'))
        .icon(FaImages),                 
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
