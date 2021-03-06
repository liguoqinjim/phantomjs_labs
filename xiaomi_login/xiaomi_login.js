var page = require('webpage').create(),
  testindex = 0,
  loadInProgress = false;

page.onLoadStarted = function () {
  loadInProgress = true;
  console.log("load started");
};

page.onLoadFinished = function () {
  loadInProgress = false;
  console.log("load finished");
};

var steps = [
  function () {
    page.open("https://account.xiaomi.com/pass/serviceLogin");
  },

  function () {
    page.evaluate(function (obj) {
      var form = document.getElementById("login-main-form");
      form.elements["username"].value = '用户名';
      form.elements["pwd"].value = '密码';
      form.elements['login-button'].click();

      return document.title;
    });
    loadInProgress = true;
  },

  function () {
    page.render('./xiaomi_login/login-succ-xiaomi.png');
  }
];

var interval = setInterval(function () {

  if (!loadInProgress && typeof steps[testindex] == "function") {
    steps[testindex]();
    testindex++;
  }
  if (typeof steps[testindex] != "function") {
    phantom.exit();
  }
}, 10);