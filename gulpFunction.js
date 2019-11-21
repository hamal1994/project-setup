const { src, dest, series, parallel } = require('gulp');


// Optimizing CSS and JavaScript
const useref = require('gulp-useref');
const gulpIf = require('gulp-if');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');


// Optimizing Images
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');

const concatFiles = () => {
  return src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(dest('dist'))
};

// Optimizing Images

const optImages = () => {
  return src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(cache(imagemin({
      progressive: true,
      // Setting interlaced to true
      interlaced: true
    })))
  .pipe(dest('dist/images'))
};

const fonts = () => {
  return src('app/fonts/**/*')
  .pipe(dest('dist/fonts'))
}

const defaultTask = (cb) => {
  //place code for your default task here
  console.log("Gulp has started!");
  cb();
}


exports.default = defaultTask;





exports.concat = concatFiles;
exports.images = optImages;
exports.copyFonts = fonts;
exports.build = series(compileSass, parallel(concatFiles, optImages));