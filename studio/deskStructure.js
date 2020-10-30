import S from '@sanity/desk-tool/structure-builder';
import { FaIcons, FaSearchengin, FaLandmark, FaRegFileAlt, FaRegNewspaper, FaRegThumbsUp, FaUsers, FaRegCopy, FaBlog } from 'react-icons/fa';

const hiddenDocTypes = listItem =>
  !['seo', 'companyInfo', 'teamMember', 'page', 'icon', 'post', 'news', 'review']
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
        .title('Team')
        .schemaType('teamMember')
        .child(S.documentTypeList('teamMember').title('Team Members'))
        .icon(FaUsers),
      S.listItem()
        .title('News')
        .schemaType('news')
        .child(S.documentTypeList('news').title('News'))
        .icon(FaRegNewspaper),
      S.listItem()
        .title('Reviews')
        .schemaType('review')
        .child(S.documentTypeList('review').title('Reviews'))
        .icon(FaRegThumbsUp),
      S.listItem()
        .title('Blog')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts'))
        .icon(FaBlog),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Resources')
                .child(
                  S.editor()
                    .id('resourcesPage')
                    .schemaType('page')
                    .documentId('resources')
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
