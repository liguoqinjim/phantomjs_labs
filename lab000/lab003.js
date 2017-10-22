var page = require('webpage').create();

page.onConsoleMessage = function (msg) {
    console.log("console:" + msg);
};

page.onResourceReceived = function (response) {
    console.log("url=" + response.url);
    console.log('Response (#' + response.id + ', stage "' + response.stage + '")');
    console.log("header=" + response.headers);
};

page.open("http://httpbin.org/cookies/set?k2=v2&k1=v1", function (status) {
    var cookies = page.cookies;

    console.log('Listing cookies:');
    for (var i in cookies) {
        console.log(cookies[i].name + '=' + cookies[i].value);
    }

    phantom.exit();
});