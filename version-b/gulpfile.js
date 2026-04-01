const gulp = require("gulp");
const stylus = require("gulp-stylus");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const paths = {
  styles: {
    src: "resources/assets/styl/app.styl",
    watch: "resources/assets/styl/**/*.styl",
    dest: "public/css/",
  },
  scripts: {
    jquery: "node_modules/jquery/dist/jquery.min.js",
    src: "resources/assets/js/app.js",
    dest: "public/js/",
  },
};

function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(stylus())
    .pipe(cleanCSS())
    .pipe(rename("app.min.css"))
    .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
  return gulp
    .src([paths.scripts.jquery, paths.scripts.src])
    .pipe(concat("app.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.scripts.src, scripts);
}

exports.styles = styles;
exports.scripts = scripts;
exports.build = gulp.parallel(styles, scripts);
exports.watch = gulp.series(gulp.parallel(styles, scripts), watch);
exports.default = gulp.parallel(styles, scripts);
