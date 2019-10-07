const { src, dest, parallel } = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

function css() {
    return src('assets/css/*.less')
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(minifyCSS())
        .pipe(dest('dist'))
}

exports.css = css;
exports.default = css;