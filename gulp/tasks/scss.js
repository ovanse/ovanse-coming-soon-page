import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css'; // Сжатие CSS файла
import autoPrefixer from 'gulp-autoprefixer'; // Добавление вендорных префиксов
import webpCss from 'gulp-webp-css'; // Вывод WEBP изображений
import shortHand from 'gulp-shorthand';
import csso from 'gulp-csso';
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Группировка медиа запросов

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemaps: app.config.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError((error) => ({
          title: 'SCSS',
          message: error.message,
        }))
      )
    )
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoPrefixer(app.config.autoPrefixer))
    .pipe(app.plugins.size({ title: 'CSS: raw' }))
    .pipe(groupCssMediaQueries())
    .pipe(
      app.plugins.gulpIf(
        app.config.isDev,
        app.gulp.dest(app.path.build.css, { sourcemaps: app.config.isDev })
      )
    )
    .pipe(app.plugins.gulpIf(app.config.isProd, shortHand()))
    .pipe(cleanCss())
    .pipe(csso())
    .pipe(
      rename({
        extname: '.min.css',
      })
    )
    .pipe(app.plugins.size({ title: 'CSS: compressed' }))
    .pipe(app.gulp.dest(app.path.build.css, { sourcemaps: app.config.isDev }))
    .pipe(app.plugins.browserSync.stream());
};
