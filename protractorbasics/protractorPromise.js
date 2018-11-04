describe('Testing angular application', function () {

    it('understanding promises', function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        element(by.css('.btn.btn-primary.btn-lg')).click();
        element(by.xpath(''));
        browser.getTitle().then(function (title) {
            console.log(title);
            if (title === "Protractor practice website - Banking Apps") {
                console.log("Title matches");
            } else {
                console.log("Title does not match");
            }
        });
    });
});