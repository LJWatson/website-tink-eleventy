import htmlmin from 'html-minifier';
import prettifyHtml from 'prettify-html';

export default (value, outputPath) => {
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
