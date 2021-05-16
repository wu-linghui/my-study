"use strict";
/*
    实现（implements）是面向对象中的一个重要概念。
    一般来讲，一个类只能继承自另一个类，
    有时候不同类之间可以有一些共有的特性，
    这时候就可以把特性提取成接口（interfaces），
    用 implements 关键字来实现。
    这个特性大大提高了面向对象的灵活性
 */
class Door {
}
class SecurityDoor extends Door {
    alert() {
        console.log('SecurityDoor alert');
    }
}
class Car {
    alert() {
        console.log('Car alert');
    }
}
// 一个类可以实现多个接口
class Car2 {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
let Point3d = { x: 1, y: 3, z: 4 };
/*
  实际上，当我们在声明 class Point 时，除了会创建一个名为 Point 的类之外，
  同时也创建了一个名为 Point 的类型（实例的类型）。
*/
// 所以我们既可以将 Point 当做一个类来用（使用 new Point 创建它的实例）
const P = new Point(1, 2);
// 也可以将 Point 当做一个类型来用（使用 : Point 表示参数的类型
function printPoint(p) {
    console.log(p.x, p.y);
}
/*
  换句话说，可以理解为定义了一个接口 Point3d 继承另一个接口 PointInstanceType。

  所以「接口继承类」和「接口继承接口」没有什么本质的区别。
  
  值得注意的是，PointInstanceType 相比于 Point，
  缺少了 constructor 方法，这是因为声明 Point 类时创建的 Point 类型是不包含构造函数的。
  另外，除了构造函数是不包含的，静态属性或静态方法也是不包含的（实例的类型当然不应该包括构造函数、静态属性或静态方法）。
  
  换句话说，声明 Point 类时创建的 Point 类型只包含其中的实例属性和实例方法
 */
class Point2 {
    /** 构造函数 */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /** 静态方法，计算与原点距离 */
    static distanceToOrigin(p) {
        return Math.sqrt(p.x * p.x + p.y * p.y);
    }
    /** 实例方法，打印此点 */
    printPoint() {
        console.log(this.x, this.y);
    }
}
/** 静态属性，坐标系原点 */
Point2.origin = new Point(0, 0);
let p1;
let p2;
