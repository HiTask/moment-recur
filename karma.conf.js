// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/moment/moment.js',
      'node_modules/moment-timezone/builds/moment-timezone-with-data.js',
      'moment-recur.js',
      'tests/spec/*.js',
    ],
    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher'
    ],
    singleRun: false
  });
};
