// 抽象类
// 抽象类不能直接实例化
abstract class Animal_2 {// 基类
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earch...")
    }
}

// 创建子类继承基类，以new实例化子类达到实例化抽象类
class Cat extends Animal_2 {// 子类
    makeSound(): void {
        console.log('miao')
    }
}

const cat = new Cat( );
cat.makeSound();
cat.move();


// props的类型
export default class Props {
    // public children: Array<React.ReactElement<any>> | React.ReactElement<any> | never[] = []
    public speed: number = 500
    public height: number = 160
    public animation: string = 'easeInOutQuad'
    public isAuto: boolean = true
    public autoPlayInterval: number = 4500
    public afterChange: Function = () => {}
    public beforeChange: Function = () => {}
    public selesctedColor: string = '#fff'
    public showDots: boolean = true
}


// public static defaultProps = new Props()

