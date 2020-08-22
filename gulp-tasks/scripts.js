const {dest, src} = require('gulp');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');

// Flags wether we compress the output etc
const isProduction = process.env.NODE_ENV === 'production';

const scripts = () => {
  return src('./src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(
      terser({
        module: true,
        toplevel: isProduction,
        compress: isProduction,
        mangle: isProduction
      })
    )
    .pipe(sourcemaps.write('./'))
    .pipe(dest('./dist/js'));
};

module.exports = scripts;
