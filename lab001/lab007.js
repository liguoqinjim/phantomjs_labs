var page = require('webpage').create();

page.onResourceRequested = function (requestData, networkRequest) {
  console.log('Req' + requestData.id + ': ' + requestData.url);

  if (requestData.url.indexOf('css') > 0 || requestData.url.indexOf('ttf') > 0 || requestData.url.indexOf('jpg') > 0 || requestData.url.indexOf('png') > 0) {
    console.log('Skipping');
    networkRequest.abort();
  }
};

page.onResourceReceived = function (response) {
  // console.log('Response (#' + response.id + ', stage "' + response.stage + '")');
};


page.open("https://www.jd.com", function (status) {

});

setTimeout(function () {
  phantom.exit()
}, 10000);