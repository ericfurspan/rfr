// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import seo from './documents/seo';
import companyInfo from './documents/companyInfo';
import testimonial from './documents/testimonial';
import pressRelease from './documents/pressRelease';
import teamMember from './documents/teamMember';
import icon from './documents/icon';
import page from './documents/page';
import post from './documents/post';
import event from './documents/event';
import service from './documents/service';
import podcast from './documents/podcast';
import payment from './documents/payment';
import banner from './documents/banner';
import jumbotron from './documents/jumbotron';
import affiliate from './documents/affiliate';
import product from './documents/product';
import successStory from './documents/successStory';
import contentPreview from './documents/contentPreview';
import theme from './documents/theme';

// Object types
import blockContent from './objects/blockContent';
import blockText from './objects/blockText';
import button from './objects/button';
import slideshow from './objects/slideshow';
import contactInfo from './objects/contactInfo';
import socialMedia from './objects/socialMedia';
import person from './objects/person';
import figure from './objects/figure';
import weblink from './objects/weblink';
import faq from './objects/faq';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'company',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Objects
    blockContent,
    blockText,
    button,
    slideshow,
    contactInfo,
    payment,
    socialMedia,
    figure,
    person,
    weblink,
    faq,
    // Documents
    seo,
    companyInfo,
    teamMember,
    pressRelease,
    testimonial,
    service,
    page,
    post,
    event,
    podcast,
    banner,
    jumbotron,
    affiliate,
    product,
    successStory,
    contentPreview,
    icon,
    theme
  ])
});
