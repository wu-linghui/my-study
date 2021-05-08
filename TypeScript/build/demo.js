"use strict";
function test() {
    let web = 'hello world';
    console.log(web);
}
test();
// 静态类型
let count = 100;
// 静态自定义类型
const yhxmnz = {
    uname: '银河系美男子',
    age: 22
};
console.log(yhxmnz.uname);
console.log(yhxmnz.age);
// 基础静态类型
const num = 199;
const myName = '吴凌晖';
// :null/ :undefined/ :boolean/ :void/ :symbol
// 对象基础类型
const obj = {
    name: '吴凌晖',
    age: 22
};
const objs = ['谢大脚', '吴', '雄安'];
class Person {
}
const lei = new Person();
const fun = () => { return 'fun'; };
let fun2 = () => { return 123; };
console.log(fun());
console.log(fun2());
// type annotation 类型注解
// type inference 类型推断
// 如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
// 如果 TS 无法分析变量类型的话， 我们就需要使用类型注解
let num2; // 类型注解
num2 = 123;
let numInference = 123;
let one = 1;
let tow = 2;
let three = one + tow;
// 函数形参系统不能推断出类型，需自定义
function getTotal(one, tow) {
    return one + tow;
}
const total = getTotal(1, 2);
const tset2 = {
    name: "123",
    age: 123
};
