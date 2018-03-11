const {getBrowser} = require('./saucelabs/setup');
var webdriver = require('selenium-webdriver');

let capabilities = [{browserName: 'firefox'}, {browserName: 'chrome'}];

for (let capability in capabilities) {
  describe('testing javascript in the browser', function () {
    before(function () {
      this.browser = getBrowser(capabilities[capability]);
      this.browser.get('http://localhost:8050/de/about');
    });

    after(function (...args) {
      console.log(args);
      return this.browser.quit();
    });

    it('should handle clicking on a headline', function (done) {
      var headline = this.browser.findElement(webdriver.By.css('h1'));
      // headline.click();

      headline.getText().then(function (txt) {
        console.log(txt);
        // assert.equal(txt, 'Headline');
        done();
      });
    });
  });
}
