describe('Promises Example', function () {

    var value_at_index = function (index) {
        element(by.xpath('//div[4]/input[' + index + ']')).getAttribute('value').then(function (text) {
            console.log(text + " getting the value from checkbox no: " + index);
        })
    }

    it('Understanding Promises Real Time', function () {
        browser.ignoreSynchronization = true;
        browser.get("http://www.tizag.com/htmlT/htmlcheckboxes.php");
        for (var i = 1; i <= 4; i++) {
            element(by.xpath('//div[4]/input[' + i + ']')).click();
            value_at_index(i);
        }
        browser.sleep(3000);
    });
})