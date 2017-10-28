### 实验

|文件|简介|
|---|---|
|lab001.js|page.open()|
|lab002.js|读取json文件|
|lab003.js|返回响应的header和body|

#### 注意
##### lab001.js
 - `open()`会开启一个网页，和我们在浏览器中打开一样。phantomjs会加载所有需要的链接，比如css，js或者图片。
 - `onResourceRequested()`和`onResourceReceived`会在每个链接开始和结束调用，`onResourceReceived`还会调用两次。
 - `onLoadStarted`和`onLoadFinished`是在开始加载资源和资源加载结束的时候各调用一次。也就是说`onLoadFinished`方法调用了之后，
 我们再调用`render`截取的网页就是我们浏览器里面看到的样子。

##### lab002.js
 - 读取外部json文件

##### lab003.js
 - `onResourceReceived`会触发两次，两次的stage不同


