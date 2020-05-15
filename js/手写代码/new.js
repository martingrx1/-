


 function animal(name,age){
    this.name = name;
    this.age = age;
    console.log('call animal')
 }


 function Mynew(origin){  // es5 写法
    if(!origin) return {};
    let arg = [].slice.call(arguments,1);
    let obj = {};
    obj.__proto__ = origin.prototype;
    let result = origin.call(obj,arg);
    return typeof result === 'object' ? result : obj;
 }

 function Mynew(origin,...arg){  // es6 写法
    if(!origin) return {};
    let obj = Object.create(origin.prototype);
    let result = origin.call(obj,arg);
    return typeof result === 'object' ? result : obj;
 }


 let dog = Mynew(animal,'dog',13)