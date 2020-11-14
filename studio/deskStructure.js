import S from '@sanity/desk-tool/structure-builder';
import { FaIcons, FaSearchengin, FaLandmark, FaStream, FaRegFileAlt, FaRegThumbsUp, FaUsers, FaRegCopy, FaBlog, FaNewspaper, FaCalendarDay, FaRegFolderOpen, FaPodcast } from 'react-icons/fa';

const hiddenDocTypes = listItem =>
  !['seo', 'companyInfo', 'teamMember', 'page', 'icon', 'post', 'event', 'pressRelease', 'review', 'service', 'podcast']
    .includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Company Info')
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('companyInfo')
        )
        .icon(FaLandmark),
      S.listItem()
        .title('Services')
        .schemaType('service')
        .child(S.documentTypeList('service').title('Services'))
        .icon(FaStream),
      S.listItem()
        .title('Team')
        .schemaType('teamMember')
        .child(S.documentTypeList('teamMember').title('Team Members'))
        .icon(FaUsers),
      S.listItem()
        .title('Reviews')
        .schemaType('review')
        .child(S.documentTypeList('review').title('Reviews'))
        .icon(FaRegThumbsUp),
      S.listItem()
        .title('Podcasts')
        .schemaType('podcast')
        .child(S.documentTypeList('podcast').title('Podcasts'))
        .icon(FaPodcast),
      S.listItem()
        .title('News')
        .child(
          S.list()
            .title('Content types')
            .items([
              S.listItem()
                .title('Blog')
                .child(
                  S.documentTypeList('post').title('Posts')
                ).icon(FaBlog),
              S.listItem()
                .title('Press Releases')
                .child(
                  S.documentTypeList('pressRelease').title('Press Release')
                ).icon(FaNewspaper),
              S.listItem()
                .title('Events')
                .child(
                  S.documentTypeList('event').title('Event')
                ).icon(FaCalendarDay)
            ])
        ).icon(FaRegFolderOpen),
      S.listItem()
        .title('Custom pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Services')
                .child(
                  S.editor()
                    .id('servicesPage')
                    .schemaType('page')
                    .documentId('services')
                )
                .icon(FaRegFileAlt),
              S.listItem()
                .title('Contact')
                .child(
                  S.editor()
                    .id('contactPage')
                    .schemaType('page')
                    .documentId('contact')
                )
                .icon(FaRegFileAlt)
            ])
        ).icon(FaRegCopy),
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
        .title('Web Icons')
        .schemaType('icon')
        .child(S.documentTypeList('icon').title('Web Icons'))
        .icon(FaIcons),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
