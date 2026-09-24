module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'vite'],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-vite'
    ],

    files: [
      'src/**/*.spec.js',
      'src/**/*.spec.jsx'
    ],

    preprocessors: {
      'src/**/*.spec.js': ['vite'],
      'src/**/*.spec.jsx': ['vite']
    },
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};