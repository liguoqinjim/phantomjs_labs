### 教程1
教程：http://javascript.ruanyifeng.com/tool/phantomjs.html

|文件名|简介|
|---|---|
|lab001.js|Get和Post方法open网页|
|lab002.js|evaluate()|
|lab003.js|render()|
|lab004.js|viewportSize和zoomFactor|
|lab005.js|onResourceRequested和onResourceReceived|
|lab006.js|system模块，读取命令行参数|

#### 注意点
##### lab002.js
 - 网页内部的和evaluate函数里面的console语句是不会直接输出的。如果想输出，要设置page的`onConsoleMessage`方法

##### lab006.js
 - 启动参数:`.\phantomjs.exe lab001\lab006.js http://www.httpbin.org/get`

##### lab007.js
 - 在`onResourceRequested`里面，可以根据需要，不如不想加载图片，那么可以调用`abort()`来终止这个连接
 - 每个连接会触发两次`onResourceReceived`，两次的内容有一点点不同，具体可以见参考资料1

#### 参考资料
1. http://blog.404mzk.com/phantomjs/onresourcerequestedonresourcereceived.html