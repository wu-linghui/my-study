"use strict";
function returnItem(para) {
    return para;
}
function returnItem2(para) {
    return para;
}
// 变量作为泛型使用，不当作值
function returnItem3(para) {
    return para;
}
// 多个泛型声明
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([7, 'seven']); // ['seven', 7]
function getArrayLength(arg) {
    console.log(arg.length); // ok
    return arg;
}
class Stack {
    constructor() {
        this.arr = [];
    }
    push(item) {
        this.arr.push(item);
    }
    pop() {
        this.arr.pop();
    }
}
// const stack = new Stack<boolean>(); // 类型“boolean”不满足约束“cate”
function getValue2(obj, key) {
    console.log(obj[key]);
    return obj[key]; //
}
const Value = {
    name: 'test',
    id: 1
};
getValue2(Value, 'name');
class Demo {
    useT() {
        this.genericProperty.doSomething();
        this.genericProperty.doSomethingElse();
    }
}
// 类作为类型约束时通过"&"——交叉类来共同约束赋值类型
class Demo2 {
    useT() {
        this.genericProperty.doSomething(); // ok
        this.genericProperty.doSomethingElse(); // ok
    }
}
/*
  我们可以为泛型中的类型参数指定默认类型。
  当使用泛型时没有在代码中直接指定类型参数，
  从实际值参数中也无法推测出时，这个默认类型就会起作用
 */
function createArray(length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
class GenericNumber {
    constructor(zeroValue, add) {
        this.zeroValue = zeroValue;
        this.add = add;
        this.zeroValue = zeroValue;
        this.add = add;
    }
}
let myGenericNumber = new GenericNumber(0, function (x, y) { return x + y; });
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
