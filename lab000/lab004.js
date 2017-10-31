var page = require('webpage').create();

//设置页面大小
page.viewportSize = {width: 1366, height: 768};

page.settings.resourceTimeout = 1000;

page.onResourceRequested = function (requestData, networkRequest) {
    if (requestData.url.indexOf("httpbin.org") != -1) {
        console.log('Request (#' + requestData.url);
    }
};

page.onResourceReceived = function (response) {
    // console.log('Response (#' + response.id + ', stage "' + response.stage + '"): ');
};

page.onLoadFinished = function () {
    console.log("load finished");
};

page.open("http://httpbin.org/", function (status) {
    console.log("open");
    page.includeJs("https://cdn.bootcss.com/jquery/1.6.4/jquery.min.js", function () {
        page.evaluate(function () {
            $('#manpage > div > ul:nth-child(6) > li:nth-child(2) > a')[0].click();
        });

        var clock = setTimeout(function () {
            page.render('./lab000/lab004.png');
            phantom.exit();
        }, 3000);
    });
});