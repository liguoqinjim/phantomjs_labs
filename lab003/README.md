### 重定向

|文件名|简介|
|---|---|
|lab001.js|onNavigationRequested|

#### 注意点
##### lab001.js
 - `onNavigationRequested`会在收到navigation event的时候被调用
 - 调用`phantom.exit()`也会触发`onNavigationRequested`，会被导航到`about:blank`