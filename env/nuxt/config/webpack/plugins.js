const fs = require('fs');

module.exports = function (plugins, srcDir) {
  let list = [].concat(...[
    // new (require('./plugins/webp'))({}, srcDir),
    new (require('./plugins/virtual-image'))({}, {
      test: /((jpe?g|png)\.webp)|(png24\.png)$/i,
      handler: function (p) {
        return fs.readFileSync(p.replace(/(\w+\.(png|jpe?g|gif)).*$/i, '$1'));
      }
    }),
    require('./plugins/imagemin'),
    require('./plugins/svg-sprite')
  ]);
  plugins.push(...list);
};
