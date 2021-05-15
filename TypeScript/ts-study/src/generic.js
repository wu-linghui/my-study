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
function getValue(obj, key) {
    console.log(obj[key]);
    return obj[key]; //
}
const Value = {
    name: 'test',
    id: 1
};
getValue(Value, 'name');
class Demo {
    useT() {
        this.genericProperty.doSomething();
        this.genericProperty.doSomethingElse();
    }
}
class Demo2 {
    useT() {
        this.genericProperty.doSomething(); // ok
        this.genericProperty.doSomethingElse(); // ok
    }
}
