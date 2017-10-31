var fs = require('fs');

//读取用户名和密码
var content = fs.read("./jd_login/user.json");
var userData = JSON.parse(content);
var username = userData["username"];
var password = userData["password"];
