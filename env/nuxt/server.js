const { Nuxt, Builder } = require('nuxt');
const app = require('express')();
const port = process.env.PORT || 8050;
const opn = require('opn');

// We instantiate Nuxt.js with the options
let config = require('./config.js');
const nuxt = new Nuxt(config);
app.use(nuxt.render);

// Build only in dev mode
if (config.dev) {
  new Builder(nuxt).build()
    .catch((error) => {
      console.error(error)
      process.exit(1)
    });
}

// Listen the server
app.listen(port, '0.0.0.0', function () {
  opn('http://localhost:8050', {app: ['google chrome', '--incognito']});
});
