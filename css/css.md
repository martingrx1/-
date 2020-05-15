# css 知识点

## 1. css3的新特性
border-radius,动画的支持(animation,transiton),更多的属性...

## 2. 如何用css画出三角形
原理:css的border其实是由四个三角形组成  
方法:设置border的宽度,然后将其余三个方向的color设置为透明色

## 3. css3的animation的各项属性
animation: 动画名 动画时长 播放速度曲线 开始播放延时 播放次数 轮流反向播放等  
[各类属性可选值](https://www.w3school.com.cn/cssref/pr_animation.asp)
   
## 4. BFC
BFC: 块级格式上下文  
特性:  
- bfc元素与外接元素相互独立,互不影响
- bfc内的元素按住从上到下进行排列
- bfc会将浮动元素计算到高度之中
- 两个bfc元素不会重叠
- bfc内的元素会产生margin重叠 (相邻两个元素的margin-top和margin-bottom重叠)

创建方法:
- overflow 不为 visible
- display 不为 block 或者 inline
- positio 不为 static 和 relative
- float 不为 none

## 5. 页面常见布局案例
[掘金 - 各种常见css布局案例](https://juejin.im/post/5aa252ac518825558001d5de)  
### 两栏布局 (一列定宽,一列自适应)  
1. 利用元素浮动 / 相对定位会脱离文档流的特性,定宽元素 浮动 / 相对定位 , 自适应元素设置定宽的 margin
2. 利用BFC的特性, 定宽元素设置 浮动 / 相对定位 设置margin, 自适应元素设置overflow:hidden
3. 利用flex布局
4. 利用grid布局

### 三栏布局(左右定宽,中间自适应)
1. 圣杯布局
2. 双飞翼布局
3. flex布局


## 6. css盒模型
由 外边距margin / 边框border /内边距padding / 宽度 & 高度 组合而成  
IE : 设置 box-sizing:border-box,则 width = 内部宽度 + padding + border
w3c: 默认,或设置box-sizing:content-box  则 width = 内部宽度





