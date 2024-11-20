import {dest, src} from 'gulp';
import terser from 'gulp-terser';
import sourcemaps from 'gulp-sourcemaps';

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

export default scripts;
