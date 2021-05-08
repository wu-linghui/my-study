"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 抽象类
// 抽象类不能直接实例化
class Animal_2 {
    move() {
        console.log("roaming the earch...");
    }
}
// 创建子类继承基类，以new实例化子类达到实例化抽象类
class Cat extends Animal_2 {
    makeSound() {
        console.log('miao');
    }
}
const cat = new Cat();
cat.makeSound();
cat.move();
// props的类型
class Props {
    constructor() {
        // public children: Array<React.ReactElement<any>> | React.ReactElement<any> | never[] = []
        this.speed = 500;
        this.height = 160;
        this.animation = 'easeInOutQuad';
        this.isAuto = true;
        this.autoPlayInterval = 4500;
        this.afterChange = () => { };
        this.beforeChange = () => { };
        this.selesctedColor = '#fff';
        this.showDots = true;
    }
}
exports.default = Props;
// public static defaultProps = new Props()
