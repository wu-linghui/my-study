"use strict";
function getTotal(one, two) {
    // return one + two + ''; // 不报错将total改成string类型，在函数注释类型即可function getTotal(one : number, two : number) : number 
    return one + two;
}
let total = getTotal(1, 2);
// void这个注释为改函数不会有任何返回值
function sayHey() {
    console.log('hello world');
    // return ''; // 报错
}
function error() {
    throw new Error('错误');
    console.log('123');
}
function fornever() {
    while (true) {
        console.log('never');
    }
}
function add({ one, two }) {
    return one + two;
}
const ad = add({ one: 1, two: 2 });
function getNumber({ one }) {
    return one;
}
const one = getNumber({ one: 1 });
