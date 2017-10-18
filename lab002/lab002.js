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
  page.includeJs("https://cdn.bootcss.com/jquery/1.6.4/jquery.min.js", function () {
    var rect = page.evaluate(function () {
      $('#loginname').val('用户名');
      $('#nloginpwd').val('密码');
      $('#loginsubmit')[0].click();
      return document.title;
    });
    //若引入jQuery 则用这种方法来实现click
    page.sendEvent('click', rect.left + rect.width / 2, rect.top + rect.height / 2);
    console.log('rect=' + rect);
    var clock = setTimeout(function () {
      page.render('./lab002/lab002.png');
      phantom.exit();
    }, 2000);
  });
});