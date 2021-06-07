[![NPM version](https://img.shields.io/npm/v/timed-task.svg)](https://www.npmjs.com/package/timed-task)

## 安装 (Installation)
```base
$ npm i --save timed-task
```

## 示例（Usgae）
```javascript
import timedTask from 'timed-task'

timedTask(key,time,callback) 
/*
    key cookieName; time  cookie Expires; callback required; 

    key cookie名称（可不填,默认是taskToDo）; time 清空cookie的时间（可不填，默认第二天凌晨清空） callback，执行函数，必须。   
*/
```

## 这是什么 (what)
#### 这是一个类似定时任务，但又有点不一样，因为它还得依靠用户访问来执行。你只需要将你需要执行的方法传入即可，传入后立即执行一次，接下来通过cookie的过期时间，用户再进入的时候执行，以此类推。