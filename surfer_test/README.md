### surfer_test
是给surfer库(`https://github.com/henrylee2cn/surfer`)用作内核用的

#### 启动参数
 - `phantomjs.exe surfer_test\surfer_test.js http://httpbin.org/cookies k3=v3 utf-8 "Mozilla/4.0 (compatible; MSIE 7.0; AOL 8; Windows NT 6.3; GTB5; .NET CLR 1.1.4322; .NET
 CLR 2.0.50727; x64)" "" get 120000`
 - `phantomjs.exe surfer_test\surfer_test.js "http://httpbin.org/cookies/set?k1=v1&k2=v2" "" utf-8 "Mozilla/4.0 (compatible; MSIE 7.0; AOL 8; Windows NT 6.3; GTB5; .NET CLR
    1.1.4322; .NET  CLR 2.0.50727; x64)" "" get 120000`
 - `phantomjs.exe surfer_test\surfer_test.js "http://httpbin.org/cookies/set?k1=v1&k2=v2" [{\"name\":\"k3\",\"value\":\"v3\",\"domain\":\"httpbin.org\",\"path\":\"\"}] utf-8  "Mozilla/4.0 (compatible; MSIE 7.0; AOL 8; Windows NT 6.3; GTB5; .NET CLR 1.1.4322; .NET  CLR 2.0.50727; x64)" "" get 120000`
 - `phantomjs.exe surfer_test\surfer_test.js "https://www.google.com/" "" utf-8 "Mozilla/4.0 (compatible; MSIE 7.0; AOL 8; Windows NT 6.3; GTB5; .NET CLR 1.1.4322; .NET  CLR 2.0.50727; x64)" "" get 2000`

#### 注意点
 - 在`onResourceRequested`的request上setHeader的方式来设置cookie的话只会对这个request有效，但是有的时候我们需要之后有跳转url的情况下，这个cookie还是有效的，就要用`phantom.addCookie`
 - 给phantomjs传参数的时候可以不加引号，直接用空格隔开