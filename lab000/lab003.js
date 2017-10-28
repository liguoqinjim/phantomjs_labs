var page = require('webpage').create();

page.onConsoleMessage = function (msg) {
    console.log("console:" + msg);
};

page.onResourceReceived = function (response) {
    console.log("--------------------------------------------------------------------------------");
    console.log("url=" + response.url);
    console.log('Response (#' + response.id + ', stage "' + response.stage + '")');
    // var i = 0;
    // for (i in response.headers) {
    //     console.log("header[" + i + "]:");
    //     for (j in response.headers[i]) {
    //         console.log("header[" + i + "," + j + "]:" + response.headers[i][j])
    //     }
    // }
    var header = JSON.stringify(response.headers);
    console.log(header);
};

page.open("http://httpbin.org/cookies/set?k2=v2&k1=v1", function (status) {
    var cookies = page.cookies;

    console.log('Listing cookies:');
    for (var i in cookies) {
        console.log(cookies[i].name + '=' + cookies[i].value);
    }

    phantom.exit();
});