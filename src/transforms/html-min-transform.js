const htmlmin = require('html-minifier');

module.exports = (value, outputPath) => {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    return value;
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
