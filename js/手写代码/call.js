let obj = {
    name: 'i am call'
}

Function.prototype.myCall6 = function (context, ...arg) { // ES6写法
    context = (context !== null && context !== undefined) ? Object(context) : window;
    context.fn = this;
    let result = arg ? context.fn(...arg) : context.fn();
    delete context.fn
    return result;
}
Function.prototype.myCall5 = function (context) { // es5 写法
    context = (context !== null && context !== undefined) ? Object(context) : window;
    var arg = [].slice.call(arguments, 1);
    context.fn = this;
    var result = arg ? eval('context.fn(' + arg + ')') : eval('context.fn()')
    delete context.fn
    return result;1
}

function test(x) {
    console.log(x)
    console.log(this.name)
}

test.myCall6(obj, 132)
test.myCall5(obj, 132)