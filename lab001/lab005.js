var page = require('webpage').create();

page.onResourceRequested = function (requestData, networkRequest) {
  console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
};

page.onResourceReceived = function (response) {
  console.log('Response (#' + response.id + ', stage "' + response.stage + '"): ' + JSON.stringify(response));
};

page.open("http://httpbin.org/get", function (status) {

});

setTimeout(function () {
  phantom.exit();
}, 10000);