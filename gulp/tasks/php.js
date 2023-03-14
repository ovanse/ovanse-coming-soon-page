export const php = () => {
  return app.gulp
    .src(app.path.src.php)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError((error) => ({
          title: 'PHP',
          message: error.message,
        }))
      )
    )
    .pipe(app.gulp.dest(app.path.build.php))
    .pipe(app.plugins.browserSync.stream());
};
