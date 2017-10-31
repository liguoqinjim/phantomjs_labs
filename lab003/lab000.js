var page = require('webpage').create();

page.onConsoleMessage = function (msg) {
    console.log("onConsoleMessage:" + msg);
};

page.onNavigationRequested = function (url, type, willNavigate, main) {
    console.log('Trying to navigate to: ' + url);
    console.log('Caused by: ' + type);
    console.log('Will actually navigate: ' + willNavigate);
    console.log('Sent from the page\'s main frame: ' + main);
};

page.onResourceReceived = function (resource) {
    if (resource.stage == "start") {
        return
    }
    console.log("onResourceReceived stage=" + resource.stage);
    console.log("resource.url=" + resource.url);
    console.log("resource.redirectURL=" + resource.redirectURL);

    if (url == resource.url && resource.redirectURL) {
        console.log("1");
    } else {
        console.log("2");
    }
};

page.open("http://httpbin.org/redirect/3", function (status) {
    console.log("status=" + status);

    phantom.exit();
});