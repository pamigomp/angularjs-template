'use strict';

exports.config = {
    allScriptsTimeout: 11000,
    specs: [
        'tests/e2e/**/*.js'
    ],
    capabilities: {
        'browserName': 'firefox'
    },
    baseUrl: 'http://localhost:8000/',
    framework: 'jasmine',
    onPrepare: function () {
        browser.driver.manage().window().maximize();
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
