# HTML知识点总结

## 1. HTML语义化
    1.1 可以使网页的结构更加清晰,便于于开发人员调试
    1.2 提升网站的SEO指数,更好地被搜索引擎爬虫抓取目标

## 2. 为什么\<script\>标签要写在\<body\>最后
    答:因为浏览器的渲染线程和JS线程不能同时执行,当其中一个线程执行时另一个线程就会挂起,所以,script标签加载时会堵塞页面的渲染和解析,会使页面出现白屏等现象,影响用户体验

## 3. 说一说 css 的 link 和 import 的区别
    答: 1.link是html的语法,而import是css的语法,两者的作用都是引入css,import会等到页面加载完成时才引入,
        2. 兼容性 : link的兼容性比import更好
        3.

## 4. script标签异步引入的方式,他们的区别 deffer
    答: script异步引入的方式有 async 和 deffer
    其中, 1. async在页面解析时加载,并等到页面解析完成时才会执行
          2. deffef在页面解析时边加载边执行,可能会导致js混乱

## 5. html5的新特性
    新增了canvas绘画,语义化标签,audio和video音视频支持,本地存储storage,websocket协议,webworker协助线程

