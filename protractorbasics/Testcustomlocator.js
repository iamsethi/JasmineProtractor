var abcd = require('./customlocators.js');


describe('Angular Home Test', function () {

    it("excel", function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        element(by.model("Auth.user.name")).sendKeys("angular");
        element(by.model("Auth.user.password")).sendKeys("password");
        element(by.model("model[options.key]")).sendKeys("Raman");
        element(by.ngClick('Auth.login()')).click();  // ngClick is a method which i've create in customlocators.js file
        browser.sleep(2000);
    });
});

