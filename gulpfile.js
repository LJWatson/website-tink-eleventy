import {parallel, watch as gulpWatch} from 'gulp';

// Pull in each task
import fonts from './gulp-tasks/fonts.js';
import images from './gulp-tasks/images.js';
import sass from './gulp-tasks/sass.js';
import scripts from './gulp-tasks/scripts.js';

// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.
const watcher = () => {
  gulpWatch('./src/images/**/*', {ignoreInitial: true}, images);
  gulpWatch('./src/scss/**/*.scss', {ignoreInitial: true}, sass);
  gulpWatch('./src/js/**/*.js', {ignoreInitial: true}, scripts);
};

// The default (if someone just runs `gulp`) is to run each task in parrallel
export default parallel(fonts, images, sass, scripts);

// This is our watcher task that instructs gulp to watch directories and
// act accordingly
export const watch = watcher;
