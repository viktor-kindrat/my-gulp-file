const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const webp = require('gulp-webp');

function compileStyles() {
    return gulp.src('./**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
}

function convertImg() {
    return gulp.src(['./**/*.jpg', './**/*.png', './**/*.jpeg'])
        .pipe(webp())
        .pipe(gulp.dest('./'))
}

exports.compileStyles = compileStyles;

exports.watchSass = function() {
    gulp.watch('./**/*.scss', gulp.series('compileStyles'));
};
exports.imgConvert = convertImg
