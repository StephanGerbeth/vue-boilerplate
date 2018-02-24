module.exports = function (rules) {
  return [{
    test: /\.(png|jpe?g|gif)\.?(\w*)?$/i,
    use: [{
      loader: 'file-loader',
      options: {
        limit: 1000,
        name (file) {
          let [, name, ext] = file.match(/(\w+)\.((png|jpe?g|gif).*)$/);
          return name + '.[hash:7].' + ext;
        }
      }
    }]
  }];
};
