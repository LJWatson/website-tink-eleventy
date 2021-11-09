const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const slugify = require('slugify');

const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const parseTransform = require('./src/transforms/parse-transform.js');
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

const EXCLUDED_TAGS = ['blog', 'all'];

module.exports = config => {
  // Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  // Plugins
  config.addPlugin(rssPlugin);
  config.addPlugin(syntaxHighlight);

  // Transforms
  config.addTransform('htmlmin', htmlMinTransform);
  config.addTransform('parse', parseTransform);

  // Returns a collection of blog posts in reverse date order
  config.addCollection('blog', collection => {
    return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
  });

  config.addCollection('tags', collection => {
    const items = [];

    // Grabs every collection, finds items with tags and uses them to
    // populate the items array if they are not excluded
    collection.getAll().forEach(item => {
      if (!item.data.tags) {
        return;
      }
      item.data.tags
        .filter(tag => !EXCLUDED_TAGS.includes(tag))
        .forEach(tag => {
          items.push(tag);
        });
    });

    return [...new Set(items)].map(item => ({
      text: item,
      url: `/tag/${slugify(item.toLowerCase())}`
    }));
  });

  config.addCollection('categories', collection => {
    const items = [];

    // Grabs all items with categories and generates a loopable
    // collection of them
    collection.getAll().forEach(item => {
      if (!item.data.categories) {
        return;
      }

      let categories = item.data.categories;

      if (typeof categories === 'string') {
        categories = [categories];
      }

      categories.forEach(category => {
        items.push(category);
      });
    });

    return [...new Set(items)].map(item => ({
      text: item,
      url: `/category/${slugify(item.toLowerCase())}`
    }));
  });

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  // Pass through
  config.addPassthroughCopy('./src/favicons/');
  config.addPassthroughCopy('./src/media/');
  config.addPassthroughCopy('./src/scripts/');

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    },
    passthroughFileCopy: true
  };
};
