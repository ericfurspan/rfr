// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import seo from './documents/seo';
import settings from './documents/settings';
import review from './documents/review';
import contact from './documents/contact';
import icon from './documents/icon';
import donation from './documents/donation';
import podcast from './documents/podcast';
import person from './documents/person';
import gallery from './documents/gallery';
import news from './documents/news';
import team from './documents/team';

// Object types
import simplePortableText from './objects/simplePortableText';
import bioPortableText from './objects/bioPortableText';
import socialMedia from './objects/socialMedia';
import figure from './objects/figure';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'business',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    simplePortableText,
    bioPortableText,
    seo,
    settings,
    news,
    review,
    contact,
    icon,
    socialMedia,
    donation,
    podcast,
    person,
    figure,
    gallery,
    team
  ])
})
