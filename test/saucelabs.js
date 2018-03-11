const {getBrowser} = require('./saucelabs/setup');
var webdriver = require('selenium-webdriver');

let capabilities = [{browserName: 'firefox'}, {browserName: 'chrome'}];

for (let capability in capabilities) {
  describe('open browser:' + capabilities[capability].browserName, function () {
    before(function () {
      this.browser = getBrowser(capabilities[capability]);
      this.browser.get('http://localhost:8050/de/about');
    });

    after(function (...args) {
      console.log('quit browser:', capabilities[capability].browserName);
      return this.browser.quit();
    });

    it('should handle clicking on a headline', function (done) {
      this.browser.wait(webdriver.until.elementLocated(webdriver.By.css('h1')))
        .then(el => {
          return el.getText();
        })
        .then(txt => {
          console.log(txt);
          done();
        });
    });

    it('should handle clicking on a headline', function (done) {
      this.browser.wait(webdriver.until.elementLocated(webdriver.By.css('h1 > div')))
        .then(el => {
          return el.getText();
        })
        .then(txt => {
          console.log(txt);
          done();
        });
    });
  });
}
