var page = require('webpage').create();

page.viewportSize = {width: 1920, height: 1080};
page.open("http://www.baidu.com", function (status) {
  page.render('./lab001/lab003.jpeg', {format: 'jpeg', quality: '100'});
  phantom.exit();
});