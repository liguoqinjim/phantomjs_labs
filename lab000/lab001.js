var page = require('webpage').create();

page.onLoadStarted = function () {
    loadInProgress = true;
    console.log("load started");
};

page.onLoadFinished = function () {
    loadInProgress = false;
    console.log("load finished");
};

page.onResourceRequested = function (requestData, networkRequest) {
    console.log('Request (#' + requestData.id + '): ' + requestData.url);
};

page.onResourceReceived = function (response) {
    console.log('Response (#' + response.id + ')');
};

page.open("https://secure.damai.cn/login.aspx", function (status) {
    console.log("page.open");
    page.render('./lab000/lab001.png');

    phantom.exit();
});