### 教程2
教程：https://aotu.io/notes/2015/11/11/phantomJs-crawler/index.html

|文件名|简介|
|---|---|
|lab001.js|截图京东未登录|
|lab002.js|模拟京东登录，引入jquery|
|lab003.js|模拟京东登录，不引入jquery|

#### 注意
##### lab002.js
 - 脚本输出中文乱码的时候，添加`phantom.outputEncoding = "gbk";`
 - 这个里面引入jquery来得到值，用`page.sendEvent`来触发点击

##### lab003.js
 - 不引入jquery脚本，要重写click方法。具体看参考资料1


#### 参考资料
1. https://stackoverflow.com/questions/15739263/phantomjs-click-an-element