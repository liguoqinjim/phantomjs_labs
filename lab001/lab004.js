var page = require('webpage').create();

page.viewportSize = {width: 480, height: 800};
page.zoomFactor = 0.25; //方法系数，1的时候是100%
page.open('http://www.baidu.com', function (status) {
  page.render("./lab001/lab004.png");
  phantom.exit();
});