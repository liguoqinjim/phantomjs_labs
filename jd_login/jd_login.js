var page = require('webpage').create();
var fs = require('fs');

//读取用户名和密码
var content = fs.read("./jd_login/user.json");
var userData = JSON.parse(content);
var username = userData["username"];
var password = userData["password"];

//截屏index
var pageRenderIndex = 0;

//乱码
phantom.outputEncoding = "gbk";

//设置页面大小
page.viewportSize = {width: 1366, height: 768};

//所有要访问的页面
var urls=new Array();
urls[0]="https://passport.jd.com/new/login.aspx?ReturnUrl=https%3A%2F%2Fwww.jd.com%2F";
urls[1]="https://www.jd.com/";

//截图方法
function renderPage() {
    page.render('./jd_login/screenshot/jd_login' + pageRenderIndex + '.png');
    console.log("screenshot[" + pageRenderIndex + "]");
    pageRenderIndex++;
}

page.onConsoleMessage = function (msg) {
    console.log("console:" + msg);
};

//页面加载完成
page.onLoadFinished = function (status) {
    // page.render('./jd_login/jd_login.png');
    //
    // console.log("截屏完成");
    console.log("加载完成:" + page.url);

    renderPage();

    if (page.url === urls[1]){
        console.log("登录界面加载完成");
    }
};

page.open("https://passport.jd.com/new/login.aspx?ReturnUrl=https%3A%2F%2Fwww.jd.com%2F", function (status) {
    page.includeJs("https://cdn.bootcss.com/jquery/1.6.4/jquery.min.js", function () {
        page.evaluate(function (username, password) {
            $('.login-tab').click();
            $('#loginname').val(username);
            $('#nloginpwd').val(password);
            $('#loginsubmit')[0].click();
        }, username, password);

        // renderPage();
        //
        // // var rect = page.evaluate(function (username, password) {
        // //     $('#login_email').val(username);
        // //     $('#login_pwd_txt').trigger("focus");
        // //     $('#login_pwd').val(password);
        // //     $('#subbtn').click();
        // // }, username, password);
        //
        // // console.log("rect=" + rect);
        // var clock = setTimeout(function () {
        //     renderPage();
        //     phantom.exit();
        // }, 3000);
    });
});

