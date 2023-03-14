export const server = () => {
  app.plugins.browserSync.init({
    server: {
      baseDir: `${app.path.buildFolder}`,
    },
    notify: false,
    port: 3000,
    browser: 'chrome',
    logLevel: 'info',
    logConnections: true,
    logFileChanges: true,
    open: true,
  });
};
