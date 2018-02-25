const webpackPlugins = require('./config/webpack/plugins');
const webpackModules = require('./config/webpack/modules');
const deepmerge = require('deepmerge');
process.env.DEBUG = 'nuxt:*';
module.exports = {
  dev: (process.env.NODE_ENV === 'development'),
  srcDir: 'src/',

  build: {
    analyze: false,

    extend (config, { isClient }) {
      webpackPlugins(config.plugins, this.options.srcDir);
      webpackModules(config.module);
    }
  },

  modules: [
    ['nuxt-i18n', {
      locales: [{
        code: 'en',
        iso: 'en-US',
        name: 'English'
      }, {
        code: 'de',
        iso: 'de-DE',
        name: 'German'
      }],
      defaultLocale: 'de',
      noPrefixDefaultLocale: false,
      redirectRootToLocale: 'de',
      loadLanguagesAsync: true,
      vueI18n: {
        messages: require('../../src/lang/content.json'),
        fallbackLocale: 'de',
        silentTranslationWarn: false
      },
      routes: {},
      ignorePaths: []
    }]
  ],

  head: deepmerge.all([require('./config/global/favicon.json'), {
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
    ],
    link: []
  }])
};
