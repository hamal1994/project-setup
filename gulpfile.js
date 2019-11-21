const { src, dest, } = require('gulp');


const sass = require('gulp-sass');

// Optimizing CSS and JavaScript
const compileSass = () => {
  return src('app/scss/*.scss')
  .pipe(sass())
  .pipe(dest('app/styles'))
};


exports.sass = compileSass;
