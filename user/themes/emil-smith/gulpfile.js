var gulp = require('gulp');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

gulp.task('watch', function() {
  gulp.watch(["./scss/**/*.scss", "./js/**/*.js"], ["scss", "js"]);
});

gulp.task('scss', function () {
  gulp
    .src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: "compact",
        precision: 10
      }).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./dist/css/"))
    .pipe(csscomb())
    .pipe(cleancss())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./dist/css/"));
});

gulp.task('js', function () {
  gulp.src(['./js/**/*.js', 'node_modules/babel-polyfill/dist/polyfill.js'])
    .pipe(sourcemaps.init())
    .pipe(babel({ presets: ['env'] }))
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/js/'));
});


gulp.task('default', ['js', 'scss']);
