describe("This is a section", function () {
    var title;
    var expected_text;

    beforeEach(function () { //before every it block it'll navigate to this page
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        element(by.model("first")).sendKeys("7");
        element(by.model("second")).sendKeys("7");
        element(by.buttonText("Go!")).click();
        expected_text = element(by.binding("latest")).getText();
        title = browser.getTitle();
    });

    afterEach(function () { //after every it block 
        browser.sleep(3000);
        console.log("after it block");
    });

    it("Validate exact Title", function () {
        title.then(function (text) {
            expect(text).toEqual("Protractor practice website - Calculator");
            expect(text).not.toEqual("Protractor-Calculator");
        });
    });

});