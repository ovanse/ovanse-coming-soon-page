const isProd = process.argv.includes('--production');
const isDev = !isProd;
const usePUG = true; // Использовать PUG или HTML

export const config = {
    isProd: isProd,
    isDev: isDev,
    usePUG: usePUG,

    autoPrefixer: {
        grid: true,
        overrideBrowserslist: ['last 3 versions'],
        cascade: true,
    },

    fonter: {
        formats: ['ttf', 'woff', 'eot', 'svg'],
    },

    htmlmin: {
        collapseWhitespace: isProd,
        removeComments: isProd,
    },

    imagemin: {
        interlaced: true,
        optimizationLevel: 3, // from 0 to 7
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        verbose: true, // выводить размер до и после работы плагина
    },

    pug: {
        pretty: isDev, // Сжатие HTML файла
        verbose: isDev, // Показывать в терминале какой файл обработан
    },

    versionNumber: {
        append: {
            cover: 0,
            key: '_v',
            to: ['css', 'js'],
        },
        output: {
            file: 'gulp/version.json',
        },
        value: '%DT%',
    },

    webpack: {
        mode: isProd ? 'production' : 'development', // минифицированный код
        output: {
            filename: 'app.min.js',
        },
    },
};
