var page = require('webpage').create();

page.open('http://jd.com', function () {
  page.render('./lab002/lab001.png');
  phantom.exit();
});