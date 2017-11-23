var system = require('system');
var page = require('webpage').create();
var url = system.args[1];
var cookie = system.args[2];
var pageEncode = system.args[3];
var userAgent = system.args[4];
var postdata = system.args[5];
var method = system.args[6];
var timeout = system.args[7];

//输出参数
// console.log("url=" + url);
// console.log("cookie=" + cookie);
// console.log("pageEncode=" + pageEncode);
// console.log("userAgent=" + userAgent);
// console.log("postdata=" + postdata);
// console.log("method=" + method);
// console.log("timeout=" + timeout);
// phantom.exit();

var ret = "";
var exit = function () {
    console.log(ret);
    phantom.exit();
};

phantom.outputEncoding = pageEncode;
page.settings.userAgent = userAgent;
page.settings.resourceTimeout = timeout;
page.settings.XSSAuditingEnabled = true;

function addCookie() {
    if (cookie != "") {
        var cookies = JSON.parse(cookie);
        for (var i = 0; i < cookies.length; i++) {
            var c = cookies[i];

            phantom.addCookie({
                'name': c.name, /* required property */
                'value': c.value, /* required property */
                'domain': c.domain,
                'path': c.path, /* required property */
            });
        }
    }
}

addCookie();

//强制设置cookie
// phantom.addCookie({
//     'name': 'k3', /* required property */
//     'value': 'v3', /* required property */
//     'domain': 'httpbin.org',
//     'path': '/', /* required property */
// });

page.onResourceRequested = function (requestData, request) {
    request.setHeader('Cookie', cookie)
};
page.onResourceReceived = function (response) {
    if (response.stage === "end") {
        console.log("liguoqinjim received11111111111111111111111111111");
        console.log("url=" + response.url);

        for (var j in response.headers) {//用javascript的for/in循环遍历对象的属性
            // var m = sprintf("AttrId[%d]Value[%d]", j, result.Attrs[j]);
            // message += m;
            // console.log(response.headers[j]);
            console.log(response.headers[j]["name"] + ":" + response.headers[j]["value"]);
        }

        console.log("liguoqinjim received22222222222222222222222222222");
    }
};
page.onError = function (msg, trace) {
    console.log("error:" + msg);
};
page.onResourceTimeout = function (e) {
    console.log("phantomjs onResourceTimeout error");
    // console.log(e.errorCode);   // it'll probably be 408
    // console.log(e.errorString); // it'll probably be 'Network timeout on resource'
    // console.log(e.url);         // the url whose request timed out
    phantom.exit(1);
};
page.onResourceError = function (resourceError) {
};
page.onLoadFinished = function (status) {
    if (status !== 'success') {
        console.log("phantomjs status:" + status);
        exit();
    } else {
        var cookies = new Array();
        for (var i in page.cookies) {
            var cookie = page.cookies[i];
            var c = cookie["name"] + "=" + cookie["value"];
            for (var obj in cookie) {
                if (obj == 'name' || obj == 'value') {
                    continue;
                }
                c += "; " + obj + "=" + cookie[obj];
            }
            cookies[i] = c;
        }

        var resp = {
            "Cookies": cookies,
            "Body": page.content
        };

        if (page.content.indexOf("body") != -1) {
            ret = JSON.stringify(resp);
            exit();
        }
    }
};

page.open(url, method, postdata, function (status) {
});