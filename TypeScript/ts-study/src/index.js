"use strict";
function greeter(person) {
    return "hello," + person;
}
const user = "wulinghui";
const decLiteral = 8;
function warUser() {
    alert("错误");
}
// 实际上只有null和undefined可以赋给void:
// 在"strictNullChecks": false,  情况下
const a = undefined;
const sym1 = Symbol("key1");
const max = BigInt(Number.MAX_SAFE_INTEGER);
const max1 = max + 1n;
const max2 = max + 2n;
max1 === max2;
let notSure = 4;
notSure = 'str';
let value;
/* unknown 与 any 的不同之处,虽然它们都可以是任何类型,
但是当 unknown 类型被确定是某个类型之前,
它不能被进行任何操作比如实例化、getter、函数执行等等。 */
// value.foo.bar;  // ERROR
// value();        // ERROR
// new value();    // ERROR
// value[0][1];    // ERROR
function getValue(value) {
    if (value instanceof Date) {
        return value.toISOString();
    }
    return String(value);
}
getValue(new Date());
const empty = [];
// 数组有两种类型定义方式，一种是使用泛型:
const list = [1, '2', 3];
// 另一种使用更加广泛那就是在元素类型后面接上 []:
const list1 = [1, 2, 3];
/* 元祖(Tuple)
   元组中包含的元素，必须与声明的类型一致，而且不能多、不能少，
   甚至顺序不能不符。 */
let x;
x = ['hello', 10]; // error
var Direction;
(function (Direction) {
    Direction[Direction["Center"] = 1] = "Center";
})(Direction || (Direction = {}));
// object类型
let value1;
// 普通对象、枚举、数组、元组通通都是 object 类型。
value1 = Direction;
value1 = [1];
value1 = [1, 'hello'];
value1 = {};
