var page = require("webpage").create();

//get
page.open("http://http://httpbin.org/get", function (status) {
  console.log("Get Method Status:" + status);
});

//post
setTimeout(function () {
  page.open('http://httpbin.org/post', 'POST', '', function (status) {
    console.log('Post Method Status:' + status);
  });
}, 1500);

//setting
var settings = {
  operation: "POST",
  encoding: "utf8",
  headers: {
    "Content-Type": "application/json"
  },
  data: JSON.stringify({
    some: "data",
    another: ["custom", "data"]
  })
};
setTimeout(function () {
  page.open('http://your.custom.api', settings, function (status) {
    console.log('Post Method With setting Status:' + status);
  });
}, 3000);

setTimeout(function () {
  phantom.exit();
}, 10000);
