### 模拟小米登录

#### 注意点
1. `page.render('login-succ-xiaomi.png');`，这样保存的话文件会存在和`phantomjs.exe`同级。
可以写上路径，根目录就是`phantomjs.exe`所在目录(`page.render('./xiaomi_login/login-succ-xiaomi.png');`)。