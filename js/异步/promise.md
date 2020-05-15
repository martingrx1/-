# promise

## 1. 一句话说一下promise
Promise 是一个对象，它代表了一个异步操作的最终完成或者失败。  
由于它的then方法和catch、finally方法会返回一个新的Promise所以可以允许我们链式调用，解决了传统的回调地狱问题。


## 2.说一下 then 和 catch 方法
1. promise的状态一经改变后不可更改
2. then 和 catch 会返回一个新的promise
3. catch无论在任何地方,都能捕获到上层的错误
4. 在promise中,返回任意一个非promise的值,都会被包裹成promise对象,例如return 2 会被包装成 promise.resolve(2)
5. Promise 的 .then 或者 .catch 可以被调用多次, 但如果Promise内部的状态一经改变，并且有了一个值，那么后续每次调用.then或者.catch的时候都会直接拿到该值
6. 在 then 和 catch 中 return error 不会抛出错误 , 所以不会被后续catch捕获
7. then 和 catch 返回值不能是 promise本身, 否则会死循环
8. then 或者 .catch 的参数期望是函数，传入非函数则会发生值透传。
9. then方法是能接收两个参数的，第一个是处理成功的函数，第二个是处理失败的函数，再某些时候你可以认为catch是.then第二个参数的简便写法
10. finally方法也是返回一个Promise，他在Promise结束的时候，无论结果为resolved还是rejected，都会执行里面的回调函数。


## all 和 race 方法
- Promise.all()的作用是接收一组异步任务，然后并行执行异步任务，并且在所有异步操作执行完后才执行回调。
- .race()的作用也是接收一组异步任务，然后并行执行异步任务，只保留取第一个执行完成的异步操作的结果，其他的方法仍在执行，不过执行结果会被抛弃。
- Promise.all().then()结果中数组的顺序和Promise.all()接收到的数组顺序一致。
- all和race传入的数组中如果有会抛出异常的异步任务，那么只有最先抛出的错误会被捕获，并且是被then的第二个参数或者后面的catch捕获；但并不会影响数组中其它的异步任务的执行。


