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

page.open("https://secure.damai.cn/login.aspx", function (status) {
  page.render('./damai_login/login_damai.png');

  phantom.exit();
});
