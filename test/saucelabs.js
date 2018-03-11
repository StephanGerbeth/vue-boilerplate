// var assert = require('assert');
var webdriver = require('selenium-webdriver');
// var b2s = require('saucelabs-multicapabilities-generator');
// var fs = require('fs');

describe('testing javascript in the browser', function () {
  beforeEach(function () {
    if (process.env.SAUCE_USERNAME !== undefined) {
      this.browser = new webdriver.Builder()
        .usingServer('http://' + process.env.SAUCE_USERNAME + ':' + process.env.SAUCE_ACCESS_KEY + '@ondemand.saucelabs.com:80/wd/hub')
        .withCapabilities({
          'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
          build: process.env.TRAVIS_BUILD_NUMBER,
          username: process.env.SAUCE_USERNAME,
          accessKey: process.env.SAUCE_ACCESS_KEY,
          browserName: 'chrome'
        }).withCapabilities({
          'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
          build: process.env.TRAVIS_BUILD_NUMBER,
          username: process.env.SAUCE_USERNAME,
          accessKey: process.env.SAUCE_ACCESS_KEY,
          browserName: 'firefox'
        }).build();
    } else {
      this.browser = new webdriver.Builder()
        .withCapabilities({
          browserName: 'chrome'
        }).build();
    }
    //
    // let list = fs.readFileSync('./.browserslistrc').toString().trim().split(/[\r\n]+/m);
    // console.log('LIST', list);
    // console.log(b2s(list).then(function (result) {
    //   console.log(result);
    // }));
    // // console.log(b2s({ browsers: ['> 1% in DE'] }));

    return this.browser.get('http://localhost:8050/de/about');
  });

  afterEach(function () {
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
