### 重定向

|文件名|简介|
|---|---|
|lab001.js|onNavigationRequested|
|lab002.js|onUrlChanged|
|lab003.js|onResourceReceived|

#### 注意点
##### lab001.js
 - `onNavigationRequested`会在收到navigation event的时候被调用
 - 调用`phantom.exit()`也会触发`onNavigationRequested`，会被导航到`about:blank`

##### lab002.js
 - `onUrlChanged`只有地址栏的url改变了才会被调用，和`onNavigationRequested`是不一样的
 - `onUrlChanged`可以和`onLoadStarted`配合使用

##### lab003.js
 - `onResourceReceived`的回调函数的参数有一个属性`redirectURL`，但是这个版本的时候只有返回码是301的时候才会有值，
 比如这个实验里面的302，`redirectURL`是不会有值的，会是null

#### 运行结果
##### lab001.js
![Imgur](https://i.imgur.com/HJ7Hz88.png)

##### lab002.js
![Imgur](https://i.imgur.com/haDhaXT.png)


#### 参考资料
1. https://github.com/ariya/phantomjs/issues/13095 (onResourceReceived的redirectURL为null的问题)