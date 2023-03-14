import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const font = () => {
  return app.gulp
    .src(app.path.src.font)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError((error) => ({
          title: 'FONTS',
          message: error.message,
        }))
      )
    )
    .pipe(app.plugins.newer(app.path.build.font))
    .pipe(fonter(app.config.fonter))
    .pipe(app.gulp.dest(app.path.build.font))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.build.font))
    .pipe(app.plugins.browserSync.stream());
};
