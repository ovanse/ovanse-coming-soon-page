import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const img = () => {
  return app.gulp
    .src(app.path.src.img)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError((error) => ({
          title: 'IMAGES',
          message: error.message,
        }))
      )
    )
    .pipe(app.plugins.newer(app.path.build.img))
    .pipe(webp())
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.gulp.src(app.path.src.img))
    .pipe(app.plugins.newer(app.path.build.img))
    .pipe(app.plugins.gulpIf(app.config.isProd, imagemin(app.config.imagemin)))
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(app.plugins.browserSync.stream());
};
