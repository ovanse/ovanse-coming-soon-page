export const jsLib = () => {
  return app.gulp
    .src(app.path.src.jsLib, { sourcemaps: app.config.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError((error) => ({
          title: 'JS-LIBs',
          message: error.message,
        }))
      )
    )
    .pipe(app.gulp.dest(app.path.build.jsLib, { sourcemaps: app.config.isDev }))
    .pipe(app.plugins.browserSync.stream());
};
