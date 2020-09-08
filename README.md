## web-post-message

## 支持环境
* 现代浏览器和IE10及以上

### script
```
<!-- 引入js脚本 -->
<script src="/lib/index.js"></script>
```

### npm:
``` 
npm install web-post-message
```
### yarn:
``` 
yarn add web-post-message
```

### 示例
---

#### postMessage 跨页面传递消息
```
import { postMessage } from 'web-post-message';

// 初始化(设置发送者白名单)
postMessage.start(['http://localhost:8080']);

// 监听事件
function handle(e) {
    console.log(e)
}

// 注册监听事件
postMessage.on(handle);

// 发送消息
postMessage.emit('http://localhost:8081', {name: 123});

// 移除指定监听事件
postMessage.remove(handle);

// 销毁所有监听事件，并移除原生window message事件
postMessage.destroy();
```

