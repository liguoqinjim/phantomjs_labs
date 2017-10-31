var page = require('webpage').create();

page.onConsoleMessage = function (msg) {
    console.log("onConsoleMessage:" + msg);
};

page.onLoadStarted = function () {
    var currentUrl = page.evaluate(function () {
        return window.location.href;
    });
    console.log('Current page ' + currentUrl + ' will be gone...');
    console.log('Now loading a new page...');
};

page.onUrlChanged = function (targetUrl) {
    console.log('New URL: ' + targetUrl);
};

page.open("http://httpbin.org/redirect/2", function (status) {
    console.log("status=" + status);

    phantom.exit();
});