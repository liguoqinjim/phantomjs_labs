var page = require('webpage').create();

var settings = {
  operation: "GET",
  encoding: "utf8",
  headers: {
    "Content-Type": "application/json"
  },
};

page.open('https://www.jd.com/', settings, function (status) {
  console.log("Get Method Status:" + status);

  var title = page.evaluate(function () {
    console.log("liguoqinjim log in evaluate");
    return document.title;
  });

  console.log("Response:" + title);

  phantom.exit()
});

page.onConsoleMessage = function (msg) {
  console.log("onConsoleMessage:" + msg);
};