# this

## 1. 什么是this
this就是函数和对象在调用期间指向本身的一个关键字

## 2. this如何使用
使用this和使用函数/对象名称差不多
```
function t(){
    let a = 132
}

t.a  // 132
```
## 3. this是怎么被绑定的 (隐式绑定)
1. 若有被对象调用,则 this 为最后调用的那个对象
```
let obj = {
    a : 132,
    b : 456,
    fun(){
        a = 456;
        console.log(this.a)
    }
}

obj.fun()  // 123
```
2. 若没有被对象调用,非严格模式下 this默认指向window ,严格模式指向underfined

```
var a = 1;

function func(){
    var a = 456;
    console.log(this.a)
}

func()  //1
```

> 在作用域链中，var定义的变量属于函数作用域,可以被子级作用域下的this访问,而let/const定义的变量数据块级作用域，不允许在其子级作用域中被访问

## 4. 显示绑定 

### call方法
显示地将调用者的this改变, 调用.call(绑定的this,参数1,参数2,参数3....)
```
let obj = {
    a : 123
}
function fun(b){
    a = 465;
    console.log(this.a)
    console.log(b)
}
fun.call(obj,999)  //123  999
```

### apply方法
显示地将调用者的this改变, 调用.call(绑定的this,[参数1,参数2,参数3...])
```
let obj = {
    a : 123
}
function fun(b){
    a = 465;
    console.log(this.a)
    console.log(b)
}
fun.apply(obj,[999])  //123 999
```

### bind方法
返回一个改变了this的调用者,后面参数和call方法差不多

```
let obj = {
    a : 123
}
function fun(b){
    a = 465;
    console.log(this.a)
    console.log(b)
}
let newFun = fun.bind(obj,999);
newFun(888)  //123 999
```