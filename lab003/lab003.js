var page = require('webpage').create();

page.onResourceReceived = function (resource) {
    if (resource.stage == "start") {
        return
    }
    console.log("onResourceReceived-------------------------------------------");
    console.log("onResourceReceived stage=" + resource.stage);
    console.log("resource.url=" + resource.url);
    console.log("resource.redirectURL=" + resource.redirectURL);
};

page.open("http://httpbin.org/redirect/3", function (status) {
    console.log("status=" + status);

    phantom.exit();
});