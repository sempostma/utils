const gulp = require('gulp');
const sass = require('gulp-sass');
const gutil = require('gulp-util');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('style', () => {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', swallowError))
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./bundle'));
});

gulp.task('default', ['style', 'babel']);

gulp.task('watch', ['watch-style', 'watch-babel']);

gulp.task('watch-style', () => {
    return gulp.watch('./src/scss/**/*.scss', ['style']);
});

function swallowError(error) {
    gutil.log(error.message);
    this.emit('end');
}

gulp.task('babel', function () {
    var polyfill = './node_modules/babel-polyfill/dist/polyfill.min.js'

    return gulp.src(['./src/scripts/**/*.js'/*, polyfill*/])
        .pipe(babel().on('error', swallowError))
        .pipe(concat('bundle.js').on('error', swallowError))
        .pipe(gulp.dest('./bundle').on('error', swallowError));
});

gulp.task('watch-babel', function () {
    gulp.watch('./src/scripts/**/*.js', ['babel']);
});

