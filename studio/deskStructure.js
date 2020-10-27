import S from '@sanity/desk-tool/structure-builder';
import { FaIcons, FaSearchengin, FaLandmark, FaNewspaper, FaThumbsUp, FaUsers } from 'react-icons/fa';

const hiddenDocTypes = listItem =>
  !['seo', 'companyInfo', 'person', 'news', 'icon', 'review']
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
        .title('Company')
        .child(
          S.editor()
            .id('companyInfo')
            .schemaType('companyInfo')
            .documentId('companyInfo')
        )
        .icon(FaLandmark),
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
        .title('People')
        .schemaType('person')
        .child(S.documentTypeList('person').title('People'))
        .icon(FaUsers),
      S.listItem()
        .title('Icons')
        .schemaType('icon')
        .child(S.documentTypeList('icon').title('Icons'))
        .icon(FaIcons),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
