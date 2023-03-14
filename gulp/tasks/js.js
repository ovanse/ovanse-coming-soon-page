import webpack from 'webpack-stream';
import babel from 'gulp-babel';

export const js = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: app.config.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError((error) => ({
          title: 'JS',
          message: error.message,
        }))
      )
    )
    .pipe(babel())
    .pipe(webpack(app.config.webpack))
    .pipe(app.gulp.dest(app.path.build.js, { sourcemaps: app.config.isDev }))
    .pipe(app.plugins.browserSync.stream());
};
