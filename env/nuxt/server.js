const { Nuxt, Builder } = require('nuxt');
const app = require('express')();
const fs = require('fs');
const httpolyglot = require('httpolyglot');
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
      console.error(error);
      process.exit(1);
    });
}

var options = {
  key: fs.readFileSync('./env/nuxt/cert/myserver.key'),
  cert: fs.readFileSync('./env/nuxt/cert/STAR_gp-home_net.crt'),
  ca: [
    fs.readFileSync('./env/nuxt/cert/AddTrustExternalCARoot.crt'),
    fs.readFileSync('./env/nuxt/cert/COMODORSAAddTrustCA.crt'),
    fs.readFileSync('./env/nuxt/cert/COMODORSADomainValidationSecureServerCA.crt')
  ],
  requestCert: false,
  rejectUnauthorized: false
};

httpolyglot.createServer(options, app).listen(port, '0.0.0.0', function () {
  opn('http://localhost:8050', {app: ['google chrome', '--incognito']});
});
