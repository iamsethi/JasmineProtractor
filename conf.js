exports.config = {


    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [{
        browserName: 'chrome'
    }],


    framework: 'jasmine2',

    


    specs: ['./protractorbasics/Testcustomlocator.js'],

    // suites: {
    
    //     smoke: ['./smoke/*.spec.js'],
    //     regression: ['./regression/*.spec.js'],
    //     functional: ['./functional/*.spec.js'],
    //     all: ['./*/*.spec.js'],
    //     selected: ['./functional/addcustomer.spec.js', './regression/openaccount.spec.js'],
    
    
    // },


    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    onPrepare: function () {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
          browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
              return new Buffer(png, 'base64')
            }, 'image/png')();
            done();
          })
        });
      },

      onComplete:function () {
        console.log("Sending Mail with reports for the test execution.");
        var sys = require('util')
        var exec = require('child_process').exec;
        function puts(error, stdout, stderr) { sys.puts(stdout) }
        exec("node mail.js", puts);
    }



}