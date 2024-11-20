import { sep } from 'node:path';

import {dest, src} from 'gulp';
import cleanCSS from 'gulp-clean-css';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sassProcessor = gulpSass(dartSass);

// Flags whether we compress the output etc
const isProduction = process.env.NODE_ENV === 'production';

// An array of outputs that should be sent over to includes
const criticalStyles = ['critical.scss'];

// Takes the arguments passed by `dest` and determines where the output file goes
const calculateOutput = ({history}) => {
  // By default, we want a CSS file in our dist directory, so the
  // HTML can grab it with a <link />
  let response = './dist/css';

  // Get everything after the last slash
  const pathSegments = history[0].split(sep);
  const sourceFileName = pathSegments[pathSegments.length - 1];

  // If this is critical CSS though, we want it to go
  // to the _includes directory, so nunjucks can include it
  // directly in a <style>
  if (criticalStyles.includes(sourceFileName)) {
    response = './src/_includes/css';
  }

  return response;
};

// The main Sass method grabs all root Sass files,
// processes them, then sends them to the output calculator
const sass = () => {
  return src('./src/scss/*.scss')
    .pipe(sassProcessor().on('error', sassProcessor.logError))
    .pipe(
      cleanCSS(
        isProduction
          ? {
              level: 2
            }
          : {}
      )
    )
    .pipe(dest(calculateOutput, {sourceMaps: !isProduction}));
};

export default sass;
