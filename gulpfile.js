const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

// compile scss to css file
function style() {
  // 1. Where is my SCSS file
  return (
    gulp
      .src("./src/scss/**/*.scss")
      // 2. Pass the css to scss compiler
      .pipe(sass().on("error", sass.logError))
      // 3. Where do I save the comiled css
      .pipe(gulp.dest("./src/css"))
      // 4. file update on sve with browser-sync
      .pipe(browserSync.stream())
  );
}

//live server watch
function watch() {
  browserSync.init({
    server: {
      baseDir: "src/"
    }
  });
  gulp.watch("src/scss/**/*.scss", style);
  gulp.watch("src/**/*.html").on("change", browserSync.reload);
  gulp.watch("src/js/**/*.js").on("change", browserSync.reload);
}
exports.style = style;
exports.watch = watch;