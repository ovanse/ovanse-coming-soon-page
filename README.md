# Web-template

## Описание проекта:

Данный шаблон предназначен для автоматизации разработки и сборки web приложений

## Модули:

    "browser-sync": Синхронизация кода с результатами в браузере
    "del": Удаление каталогов и файлов
    "gulp": Сборщик Gulp
    "gulp-autoprefixer": Добавляет префиксы в CSS код
    "gulp-clean-css": Минификация и оптимизация CSS файлов
    "gulp-concat": Объединение нескольких файлов в один
    "gulp-imagemin": Для сжатия изображений
    "gulp-less": Компиляция Less файлов
    "gulp-rename": Переименовывает файлы
    "gulp-sass": Компиляция Sass и Scss файлов
    "gulp-sourcemaps": Для работы с препроцессорами, создает карту кода для консоли в браузере
    "gulp-stylus": Компиляция Stylus файлов
    "gulp-uglify": Сжатие и оптимизация Java Script кода

## Структура файлов и папок:

```
.
|-- gulp
|   |-- config
|   |   |-- config.js
|   |   |-- path.js
|   |   |-- plugins.js
|   |-- tasks
|   |   |-- *.js
|   |-- version.json
|-- src
|   |-- download
|   |   |-- *
|   |-- files
|   |   |-- *
|   |-- fonts
|   |   |-- **/*.{ttf|otf|webb|webb2}
|   |-- html
|   |   |-- includes
|   |   |   |-- **/*.html
|   |   |-- index.html
|   |   |-- *.html
|   |-- img
|   |   |-- **/*.{jpg|jpeg|gif|tiff|png|svg}
|   |-- js
|   |   |-- includes
|   |   |   |-- **/*.js
|   |   |-- app.js
|   |-- pug
|   |   |-- includes
|   |   |   |-- **/*.pug
|   |   |-- *.pug
|   |   |-- index.pug
|   |-- scss
|   |   |-- includes
|   |   |   |-- _main.scss
|   |   |   |-- _mixins.scss
|   |   |   |-- _*.scss
|   |   |-- style.scss
|   |--file.txt
|-- .gitignore
|-- .prettierignore
|-- gulpfile.js
|-- package.json
|-- README.md
|-- tmp

```

## Инструкция:

1. Скачать все файлы в любую директорию;
2. Ввести в терминале/командной строке команду: `npm i` (должен быть установлен node.js);
3. Если работа будет с препроцессором PUG, то в файле `gulp/config/config.js` переменной usePUG поставить значение true;
4. Для запуска сборки в режиме разработки `npm run dev`
5. Для построение сборки для релиза `npm run build`
6. Писать свой код и наслаждаться автоматической сборкой проекта.

***

[![GitHub](https://img.shields.io/badge/-Мой_GitHub-333?style=for-the-badge&logo=GitHub&logoColor=fff)](https://github.com/ovanse)
