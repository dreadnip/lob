const { src, dest, watch, series } = require('gulp');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');

function css() {
    return src('assets/css/*.less')
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(minifyCSS())
        .pipe(dest('dist'))
}

exports.default = function() {
    watch('assets/css/*.less', css);
};