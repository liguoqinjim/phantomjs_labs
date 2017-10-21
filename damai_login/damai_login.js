var page = require('webpage').create();
var fs = require('fs');

var content = fs.read("./damai_login/user.json");
var userData = JSON.parse(content);
var username = userData["username"];
var password = userData["password"];

if (username == "" || password == "") {
    console.log("userData error");
    phantom.exit();
}

page.onLoadStarted = function () {
    console.log("load started");
};

page.onLoadFinished = function () {
    console.log("load finished");
};

page.onConsoleMessage = function (msg) {
    console.log("console:" + msg);
};

page.open("https://secure.damai.cn/login.aspx", function (status) {
    page.includeJs("https://cdn.bootcss.com/jquery/1.6.4/jquery.min.js", function () {
        var rect = page.evaluate(function (username, password) {
            $('#login_email').val(username);
            $('#login_pwd_txt').trigger("focus");
            $('#login_pwd').val(password);
            $('#subbtn').click();
        }, username, password);

        console.log("rect=" + rect);
        var clock = setTimeout(function () {
            page.render('./damai_login/login_damai.png');
            phantom.exit();
        }, 3000);
    });
});
