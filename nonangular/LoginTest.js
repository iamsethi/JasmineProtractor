describe("Test Login", function () {


    it("validate user credentials", function () {
        browser.ignoreSynchronization = true; // to handle non angular elements
        browser.get("http://gmail.com");
        element(by.id("identifierId")).sendKeys("trainer@way2automation.com");
        element(by.xpath("//span[text()='Next']")).click();
        element(by.name("password")).sendKeys("skdfhsdf");
        element(by.css("#signIn")).click();
        element(by.css("#errormsg_0_Passwd")).getText().then(function (text) {
            console.log(text);
        });
    });
});