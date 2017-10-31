var page = require('webpage').create();

page.onConsoleMessage = function (msg) {
    console.log("onConsoleMessage:" + msg);
};

page.onNavigationRequested = function (url, type, willNavigate, main) {
    console.log("onNavigationRequested---------------------------------------------------");
    console.log('Trying to navigate to: ' + url);
    console.log('Caused by: ' + type);
    console.log('Will actually navigate: ' + willNavigate);
    console.log('Sent from the page\'s main frame: ' + main);
};

page.open("http://httpbin.org/redirect/2", function (status) {
    console.log("status=" + status);

    phantom.exit();
});