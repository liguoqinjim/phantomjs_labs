var fs = require('fs');

var content = fs.read('./lab000/lab002.json');
// console.log('read data:', content);
var data = JSON.parse(content);
console.log("username=" + data["username"]);
console.log("password=" + data["password"]);

phantom.exit();