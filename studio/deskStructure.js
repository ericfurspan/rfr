import S from '@sanity/desk-tool/structure-builder';
import { FaIcons, FaSearchengin, FaLandmark, FaRegThumbsUp, FaUsers, FaBlog, FaNewspaper, FaCalendarDay, FaPodcast, FaRegCreditCard, FaRegNewspaper, FaProjectDiagram, FaBullhorn, FaObjectGroup, FaHandsHelping, FaSitemap, FaRegCopy, FaRegFile, FaPalette, FaTags, FaRegSmileBeam } from 'react-icons/fa';

import { customPages, availableLandingContent } from './constants';

const hiddenDocTypes = listItem =>
  !['seo', 'companyInfo', 'teamMember', 'page', 'icon', 'post', 'event', 'pressRelease', 'testimonial', 'service', 'podcast', 'payment', 'gallery', 'banner', 'jumbotron', 'affiliate', 'product', 'successStory', 'contentPreview', 'theme']
    .includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
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
        .title('Services')
        .schemaType('service')
        .child(S.documentTypeList('service').title('Services'))
        .icon(FaProjectDiagram),
      S.listItem()
        .title('Merchandise')
        .schemaType('product')
        .child(S.documentTypeList('product').title('Merchandise'))
        .icon(FaTags),
      S.listItem()
        .title('Team')
        .schemaType('teamMember')
        .child(S.documentTypeList('teamMember').title('Team Members'))
        .icon(FaUsers),
      S.listItem()
        .title('Testimonials')
        .schemaType('testimonial')
        .child(S.documentTypeList('testimonial').title('Testimonials'))
        .icon(FaRegThumbsUp),
      S.listItem()
        .title('Success Stories')
        .schemaType('successStory')
        .child(S.documentTypeList('successStory').title('Success Stories'))
        .icon(FaRegSmileBeam),
      S.listItem()
        .title('Affiliates')
        .schemaType('affiliate')
        .child(S.documentTypeList('affiliate').title('Affiliates'))
        .icon(FaHandsHelping),
      S.listItem()
        .title('Podcast')
        .child(
          S.editor()
            .id('podcast')
            .schemaType('podcast')
            .documentId('podcast')
            .title('Podcast')
        )
        .icon(FaPodcast),
      S.listItem()
        .title('Payments')
        .child(
          S.editor()
            .id('payment')
            .schemaType('payment')
            .documentId('payment')
            .title('Payments')
        )
        .icon(FaRegCreditCard),
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
                .title('Press')
                .child(
                  S.documentTypeList('pressRelease').title('Press')
                ).icon(FaNewspaper),
              S.listItem()
                .title('Events')
                .child(
                  S.documentTypeList('event').title('Event')
                ).icon(FaCalendarDay)
            ])
        ).icon(FaRegNewspaper),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Homepage')
                .child(
                  S.list()
                    .title('Homepage content')
                    .items(availableLandingContent.map((_content) =>
                      S.listItem()
                        .title(_content.title)
                        .child(
                          S.editor()
                            .id(_content.identifier)
                            .schemaType('contentPreview')
                        )
                    ))
                ).icon(FaRegFile),
              S.listItem()
                .title('Custom pages')
                .child(
                  S.list()
                    .title('Custom pages')
                    .items(customPages.map((_page) =>
                      S.listItem()
                        .title(_page.title)
                        .child(
                          S.editor()
                            .id(_page.id)
                            .schemaType('page')
                            .documentId(_page.docId)
                        )
                        .icon(FaRegFile)
                    ))
                ).icon(FaRegCopy)
            ])
        ).icon(FaSitemap),
      S.listItem()
        .title('Jumbotron')
        .child(
          S.editor()
            .id('jumbotron')
            .schemaType('jumbotron')
            .documentId('jumbotron')
            .title('Jumbotron')
        )
        .icon(FaObjectGroup),
      S.listItem()
        .title('Banner')
        .child(
          S.editor()
            .id('banner')
            .schemaType('banner')
            .documentId('banner')
            .title('Banner')
        )
        .icon(FaBullhorn),
      S.listItem()
        .title('SEO')
        .child(
          S.editor()
            .id('seo')
            .schemaType('seo')
            .documentId('seo')
            .title('Search Engine Optimization Metadata')
        )
        .icon(FaSearchengin),
      S.listItem()
        .title('Theme')
        .child(
          S.editor()
            .id('theme')
            .schemaType('theme')
            .documentId('theme')
            .title('Theme')
        )
        .icon(FaPalette),
      S.listItem()
        .title('Web Icons')
        .schemaType('icon')
        .child(S.documentTypeList('icon').title('FontAwesome Icons'))
        .icon(FaIcons),
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
