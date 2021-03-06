"use strict";
let gulp = require('gulp');

let sass = require('gulp-sass');
gulp.task('sass', function () {
  gulp.src('./src/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/*.sass', ['sass']);
});