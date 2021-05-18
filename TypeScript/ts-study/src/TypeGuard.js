"use strict";
// 类型守卫说白了就是缩小类型的范围，我们看几个例子就容易理解了
// instanceof
class Person {
    constructor() {
        this.name = 'xiaomuzhu';
        this.age = 20;
    }
}
class TypeAnimal {
    constructor() {
        this.name = 'petty';
        this.color = 'pink';
    }
}
function getSomthing(arg) {
    // 类型细化为Person
    if (arg instanceof Person) {
        // console.log(arg.color); // error, 因为arg被细化为Person，而Person上不存在 color属性
        console.log(arg.age); // ok
    }
    // 类型细化为TypeAnimal
    if (arg instanceof TypeAnimal) {
        // console.log(arg.age); // error, 因为arg被细化为Animal，而TypeAnimal上不存在 age 属性
        console.log(arg.color);
    }
}
// in
// 跟上面的例子类似，x in y 表示 x 属性在 y 中存在
function getpertoty(arg) {
    if ('age' in arg) {
        // console.log(arg.color); // error
        console.log(arg.age); // ok
    }
    if ('color' in arg) {
        // console.log(arg.age); // error
        console.log(arg.color); // ok
    }
}
function doStuff(arg) {
    if (arg.kind === 'foo') {
        console.log(arg.foo); // ok
        // console.log(arg.bar); // error
    }
    if (arg.kind === 'bar') {
        // console.log(arg.foo); // Error
        console.log(arg.bar); // ok
    }
}
