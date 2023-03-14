import gulpPug from 'gulp-pug';

export const pug = () => {
  return app.gulp
    .src(app.path.src.pug)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError((error) => ({
          title: 'PUG',
          message: error.message,
        }))
      )
    )
    .pipe(gulpPug(app.config.pug))
    .pipe(app.plugins.webpHtmlNoSvg())
    .pipe(app.plugins.versionNumber(app.config.versionNumber))
    .pipe(app.gulp.dest(app.path.build.pug))
    .pipe(app.plugins.browserSync.stream());
};
