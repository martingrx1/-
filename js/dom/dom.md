# JS的dom总结

## 1. dom有哪几类事件
分为: dom0, dom2, dom3事件  
```
 //dom0  
 el.onClick = callback(){}    //w3c添加
 el.onClick = null  //w3c取消

 //dom2
 el.addEvenListener(event,callback,pop?);  //w3c添加
 el.removeEventListener(event, callback, pop?);  //W3c解绑

 el.attachEvent("on"+event,callback);  //ie绑定
 el.detachEvent("on"+event,callback);  //ie解绑

 dom3: 和dom2类似,只是新增了一些事件类别
```

## 2. 事件捕获 事件冒泡 和事件委托

事件捕获:js触发dom事件时会首先从顶部元素触发,然后依次向下触发直到找到目标元素  
停止事件捕获: 

事件冒泡:在事件捕获完成之后,从目标元素开始,触发dom事件直到最顶层元素 
阻止事件冒泡:  
- addEventListener 的第三个参数,默认false 冒泡阶段触发,true捕获阶段触发
- w3C:e.stopPropagation IE: window.event.cancelBubble = true

**以下事件不会冒泡**
- onblur
- onfocus
- onmouseenter
- onmouseleave

事件委托:原理是利用事件冒泡触发事件时的参数even,在顶层 / 父级元素可以监听事件触发, 然后由顶层 / 父级元素进行逻辑处理  
**优点**:  
1.减少相同的事件注册,减少内存使用  
2.可以实现新增元素动态绑定事件


## 3.默认事件
某些html标签独有的事件,例如 a 标签的跳转, input 的表单提交等,这些默认事件有时是我们不需要的  
**阻止默认事件**:  
```
 e.preventDefault()  //w3c
 window.event.returnValue == false; //ie
```
## 4.自定义事件


