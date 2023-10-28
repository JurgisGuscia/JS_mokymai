var gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function style() {
  return gulp
    .src("./sass/main.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("./style/"));
}
exports.style = style;

function watch() {
  gulp.watch("./sass/main.scss", style);
}
exports.watch = watch;
