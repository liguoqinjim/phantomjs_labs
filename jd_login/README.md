### 模拟京东登录

#### 注意点
 - 点击登录按钮的调用是`$('#loginsubmit')[0].click();`，不加这个`[0]`调用会没反应。
 但是在chrome的console调用的时候是不用加的，不知道是不是phantomjs特殊的。下次click没反应的时候要试一下这个。