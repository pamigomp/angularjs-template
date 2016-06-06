'use strict';

exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        'tests/e2e/**/*.js'
    ],
    multiCapabilities: [{
            'browserName': 'firefox'
        }, {
            'browserName': 'chrome',
            'chromeOptions': {
                'args': ['--disable-extensions']
            }
        }],
    baseUrl: 'http://localhost:8000/app/',
    framework: 'jasmine',
    onPrepare: function () {
        browser.driver.manage().window().setSize(800, 600);
        var jasmineReporters = require('jasmine-reporters');
        return browser.getProcessedConfig().then(function (config) {
            var browserName = config.capabilities.browserName;
            var junitReporter = new jasmineReporters.JUnitXmlReporter({
                consolidateAll: true,
                savePath: 'protractor-test-results/' + browserName,
                filePrefix: 'testoutput',
                modifySuiteName: function (generatedSuiteName, suite) {
                    return browserName + '.' + generatedSuiteName;
                }
            });
            jasmine.getEnv().addReporter(junitReporter);
        });
    },
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000
    }
};
