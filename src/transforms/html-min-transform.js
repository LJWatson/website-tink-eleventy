const htmlmin = require('html-minifier');
const prettifyHtml = require('prettify-html');

module.exports = (value, outputPath) => {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    return prettifyHtml(value);
  }

  if (!outputPath) {
    return value;
  }

  if (outputPath && outputPath.indexOf('.html') > -1) {
    let minified = htmlmin.minify(value, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true
    });
    return minified;
  }

  return value;
};
