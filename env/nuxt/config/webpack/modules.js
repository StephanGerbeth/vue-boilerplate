// const dataLoader = require.resolve('./modules/data-loader.js');

module.exports = function (module) {
  let urlLoader = module.rules.find((rule) => rule.loader === 'url-loader');
  urlLoader.test = /\.()$/;

  // let vueLoader = module.rules.find((rule) => rule.loader === 'vue-loader');
  // vueLoader.options.loaders.content = dataLoader;
  // vueLoader.options.loaders.i18n = '@kazupon/vue-i18n-loader';
  let list = [].concat(...[
    // require('./modules/data-loader')(module.rules),
    require('./modules/svg-sprite')(module.rules),
    require('./modules/image-loader')(module.rules)
  ]).reduce(function (result, item) {
    if (item && item.env && item.env[process.env.NODE_ENV]) {
      result.push(item.module);
    }
    return result;
  }, []);
  module.rules.push(...list);
};
