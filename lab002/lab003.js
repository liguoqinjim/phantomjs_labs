var page = require('webpage').create();

phantom.outputEncoding = "gbk";

page.onLoadStarted = function () {
  loadInProgress = true;
  console.log("load started");
};

page.onLoadFinished = function () {
  loadInProgress = false;
  console.log("load finished");
};
page.onUrlChanged = function () {
  console.log("onUrlChanged");
};
page.open('https://passport.jd.com/new/login.aspx', function () {
  page.evaluate(function () {
    function click(el) {
      var ev = document.createEvent("MouseEvent");
      ev.initMouseEvent(
        "click",
        true /* bubble */, true /* cancelable */,
        window, null,
        0, 0, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
      );
      el.dispatchEvent(ev);
    }

    document.getElementById("loginname").value = "用户名";
    document.getElementById("nloginpwd").value = "密码";
    var ele = document.getElementById("loginsubmit");
    click(ele);
  });

  var clock = setTimeout(function () {
    page.render('./lab002/lab003.png');
    phantom.exit();
  }, 2000);
});
