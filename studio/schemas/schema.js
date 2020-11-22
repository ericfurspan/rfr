// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import seo from './documents/seo';
import companyInfo from './documents/companyInfo';
import review from './documents/review';
import pressRelease from './documents/pressRelease';
import teamMember from './documents/teamMember';
import icon from './documents/icon';
import page from './documents/page';
import post from './documents/post';
import event from './documents/event';
import service from './documents/service';
import podcast from './documents/podcast';
import payment from './documents/payment';
import marketing from './documents/marketing';

// Object types
import blockContent from './objects/blockContent';
import blockText from './objects/blockText';
import slideshow from './objects/slideshow';
import contactInfo from './objects/contactInfo';
import socialMedia from './objects/socialMedia';
import person from './objects/person';
import figure from './objects/figure';
import weblink from './objects/weblink';

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
    slideshow,
    contactInfo,
    payment,
    socialMedia,
    figure,
    person,
    weblink,
    // Documents
    seo,
    companyInfo,
    teamMember,
    pressRelease,
    review,
    service,
    page,
    post,
    event,
    podcast,
    marketing,
    icon
  ])
});
