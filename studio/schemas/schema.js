// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document types
import seo from './documents/seo';
import companyInfo from './documents/companyInfo';
import review from './documents/review';
import news from './documents/news';
import teamMember from './documents/teamMember';
import icon from './documents/icon';
import page from './documents/page';
import post from './documents/post';

// Object types
import blockContent from './objects/blockContent';
import blockText from './objects/blockText';
import slideshow from './objects/slideshow';
import payment from './objects/payment';
import podcast from './objects/podcast';
import contactInfo from './objects/contactInfo';
import socialMedia from './objects/socialMedia';
import person from './objects/person';
import figure from './objects/figure';

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
    podcast,
    // Documents
    seo,
    companyInfo,
    teamMember,
    news,
    review,
    page,
    post,
    icon
  ])
});
