module.exports = function (module) {
  const urlLoader = module.rules.find((rule) => rule.loader === 'url-loader');
  urlLoader.test = /\.()$/;

  let list = [].concat(...[
    require('./modules/svg-sprite')(module.rules),
    require('./modules/image-loader')(module.rules)
  ]).reduce(function (result, item) {
    if (item.env[process.env.NODE_ENV]) {
      result.push(item.module);
    }
    return result;
  }, []);
  module.rules.push(...list);
};
