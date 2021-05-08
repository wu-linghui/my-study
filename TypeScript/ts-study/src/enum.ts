enum Direction {
    Up,
    Down,
    Left,
    Right
}

// 值其实是默认的数字类型,而且默认从0开始依次累加
console.log(Direction.Up === 0); // true
console.log(Direction.Down === 1); // true
console.log(Direction.Left === 2); // true
console.log(Direction.Right === 3); // true

// 反向映射
console.log(Direction[0]); // Up

enum Direction2 {
    Up = 10,
    Down,
    Left,
    Right
}
// 10 11 12 13
console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right);

// 字符串枚举类型
enum DirectionStr {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction['Right'], Direction.Up); // Right Up

enum numberStrEnum {
    No = "no",
    Yes = 1,
}

console.log(numberStrEnum['No'], numberStrEnum.Yes); // 

// 枚举为常量时
const enum constEnum {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

const b = constEnum.Up;

// 编译为 JavaScript 后
// var b = "Up";
/* 如果你非要 TypeScript 保留对象 Direction ,
   那么可以添加编译选项 --preserveConstEnums */


/* 当所有枚举成员都拥有字面量枚举值时，
   它就带有了一种特殊的语义，
   即枚举成员成为了类型 */
const typeValue = 0;
typeValue === Direction.Up;

type c = 0;
declare let d: c;

// d = 1; // 不能将类型“1”分配给类型“0”
d = Direction.Up; // ok

/* 通过枚举类型声明一个联合类型来约束赋值 */

declare let f: Direction;

enum Animal {
    Dog,
    Cat
}

f = Direction.Up; // ok
f = 0;
f = 100;
// 'Enums are compatible with numbers, and numbers are compatible with enums',枚举与数字相互兼容，所以你的代码没报错应该是正常的
// f = Animal.Dog // 不能将类型“Animal.Dog”分配给类型“Direction”

/* 枚举合并
   可以分开声明枚举,他们会自动合并*/
enum Animal {
    newAnimal = 'fish'
}


