"use strict";

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('minify', function () {
	return gulp.src('angular-stringcontains.js')
		.pipe(uglify())
		.pipe(rename('angular-stringcontains.min.js'))
		.pipe(gulp.dest('.'))
		.pipe(gulp.dest('example'));
});

gulp.task('deploy', function () {
	return gulp.src('./example/*')
		.pipe(ghPages());
});

gulp.task('clean', function () {
	return del([
		'.sublime-gulp.cache', '.publish/'
	]);
});