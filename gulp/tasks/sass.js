const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  };

  exports.buildStyles = buildStyles;