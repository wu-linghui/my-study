"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// 值其实是默认的数字类型,而且默认从0开始依次累加
console.log(Direction.Up === 0); // true
console.log(Direction.Down === 1); // true
console.log(Direction.Left === 2); // true
console.log(Direction.Right === 3); // true
// 反向映射
console.log(Direction[0]); // Up
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 10] = "Up";
    Direction2[Direction2["Down"] = 11] = "Down";
    Direction2[Direction2["Left"] = 12] = "Left";
    Direction2[Direction2["Right"] = 13] = "Right";
})(Direction2 || (Direction2 = {}));
// 10 11 12 13
console.log(Direction2.Up, Direction2.Down, Direction2.Left, Direction2.Right);
// 字符串枚举类型
var DirectionStr;
(function (DirectionStr) {
    DirectionStr["Up"] = "Up";
    DirectionStr["Down"] = "Down";
    DirectionStr["Left"] = "Left";
    DirectionStr["Right"] = "Right";
})(DirectionStr || (DirectionStr = {}));
console.log(Direction['Right'], Direction.Up); // Right Up
var numberStrEnum;
(function (numberStrEnum) {
    numberStrEnum["No"] = "no";
    numberStrEnum[numberStrEnum["Yes"] = 1] = "Yes";
})(numberStrEnum || (numberStrEnum = {}));
console.log(numberStrEnum['No'], numberStrEnum.Yes); // 
const b = "Up" /* Up */;
// 编译为 JavaScript 后
// var b = "Up";
/* 如果你非要 TypeScript 保留对象 Direction ,
   那么可以添加编译选项 --preserveConstEnums */
/* 当所有枚举成员都拥有字面量枚举值时，
   它就带有了一种特殊的语义，
   即枚举成员成为了类型 */
const typeValue = 0;
typeValue === Direction.Up;
// d = 1; // 不能将类型“1”分配给类型“0”
d = Direction.Up; // ok
var Animal;
(function (Animal) {
    Animal[Animal["Dog"] = 0] = "Dog";
    Animal[Animal["Cat"] = 1] = "Cat";
})(Animal || (Animal = {}));
f = Direction.Up; // ok
f = 0;
f = 100;
// 'Enums are compatible with numbers, and numbers are compatible with enums',枚举与数字相互兼容，所以你的代码没报错应该是正常的
// f = Animal.Dog // 不能将类型“Animal.Dog”分配给类型“Direction”
/* 枚举合并
   可以分开声明枚举,他们会自动合并*/
(function (Animal) {
    Animal["newAnimal"] = "fish";
})(Animal || (Animal = {}));
cf = 0;
cf = Animal.newAnimal;
// cf = 'fish'
