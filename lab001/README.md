### 教程1
教程：http://javascript.ruanyifeng.com/tool/phantomjs.html

|文件名|简介|
|---|---|
|lab001.js|Get和Post方法open网页|
|lab002.js|evaluate()|
|lab003.js|render()|
|lab004.js|viewportSize和zoomFactor|
|lab005.js|onResourceRequested和onResourceReceived|

#### 注意点
##### lab002.js
1. 网页内部的和evaluate函数里面的console语句是不会直接输出的。如果想输出，要设置page的`onConsoleMessage`方法