const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const webp = require('gulp-webp');

function compileStyles() {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/'));
}

function convertImg() {
    return gulp.src(['./src/**/*.jpg', './src/**/*.png', './src/**/*.jpeg', './src/**/*.'])
        .pipe(webp())
        .pipe(gulp.dest('./src/'))
}

exports.compileStyles = compileStyles;

exports.watchSass = function() {
    gulp.watch('./src/**/*.scss', gulp.series('compileStyles'));
};
exports.imgConvert = convertImg