import fileInclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError((error) => ({
          title: 'HTML',
          message: error.message,
        }))
      )
    )
    .pipe(fileInclude())
    .pipe(app.plugins.webpHtmlNoSvg())
    .pipe(app.plugins.gulpIf(app.config.isProd, app.plugins.size({ title: 'HTML: raw' })))
    .pipe(app.plugins.gulpIf(app.config.isProd, htmlmin(app.config.htmlmin)))
    .pipe(app.plugins.gulpIf(app.config.isProd, app.plugins.size({ title: 'HTML: compressed' })))
    .pipe(app.plugins.versionNumber(app.config.versionNumber))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
};
