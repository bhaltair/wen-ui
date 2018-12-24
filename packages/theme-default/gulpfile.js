'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss')
var cssnano = require('cssnano');
var salad = require('postcss-salad')(require('./salad.config.json'))
gulp.task('compile', function() {
  var plugins = [
    salad,
    cssnano()
  ];
  return gulp.src('./src/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./lib'));
});

gulp.task('copyfont', function() {
  return gulp.src('./src/fonts/**')
    .pipe(gulp.dest('./lib/fonts'));
});

gulp.task('build', ['compile', 'copyfont']);

gulp.task('some', function() {
  console.log('task some')
})
gulp.task('watch', function () {
  var watcher =  gulp.watch('src/*.scss', ['build'])
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
})
