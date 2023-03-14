import browserSync from 'browser-sync'; // Локальный сервер
import gulpIf from 'gulp-if'; // Позволяет использовать логические конструкции в gulp
import newer from 'gulp-newer'; // Проверяет обновился ли файл
import notify from 'gulp-notify'; // Сообщения (подсказки)
import plumber from 'gulp-plumber'; // Обработка ошибок
import size from 'gulp-size'; // Показывает размер файла|ов
import versionNumber from 'gulp-version-number';
import webpHtmlNoSvg from 'gulp-webp-html-nosvg';

// Экспортируем объект
export const plugins = {
  browserSync: browserSync,
  gulpIf: gulpIf,
  newer: newer,
  notify: notify,
  plumber: plumber,
  size: size,
  versionNumber: versionNumber,
  webpHtmlNoSvg: webpHtmlNoSvg,
};
