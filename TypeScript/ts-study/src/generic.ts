function returnItem (para: number): number {
    return para;
}

function returnItem2 (para: string): string {
    return para;
}

// 变量作为泛型使用，不当作值
function returnItem3<type> (para: type): type {
    return para;
}


// 多个泛型声明
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]

function getArrayLength<T>(arg: Array<T>) {  
    console.log((arg as Array<any>).length) // ok
    return arg
}



interface ReturnItemFn<T> {
    (para: T): T;
}

// const returnItemFn: ReturnItemFn<number> = para => {return console.log(para);};

// returnItemFn(23)


type cate = number | string;

class Stack<T extends cate> {
    private arr: T[] = [];

    public push (item:T) {
        this.arr.push(item);
    }

    public pop () {
        this.arr.pop();
    }
}


// const stack = new Stack<boolean>(); // 类型“boolean”不满足约束“cate”


function getValue2<T extends object, U extends keyof T> (obj: T, key: U) {
    console.log(obj[key]);
    return obj[key]; //
}

const Value = {
    name: 'test',
    id: 1
}

getValue2(Value, 'name');



interface FirstInterface {
    doSomething(): number
}

interface SecondInterface {
    doSomethingElse(): string
}

interface ChildInterface extends FirstInterface, SecondInterface {

}

class Demo<T extends ChildInterface> {
    private genericProperty!: T;

    useT() {
        this.genericProperty.doSomething()
        this.genericProperty.doSomethingElse()
    }
}

// 类作为类型约束时通过"&"——交叉类来共同约束赋值类型
class Demo2<T extends FirstInterface & SecondInterface> {
    private genericProperty!: T
  
    useT() {
      this.genericProperty.doSomething() // ok
      this.genericProperty.doSomethingElse() // ok
    }
}


/* 
  我们可以为泛型中的类型参数指定默认类型。
  当使用泛型时没有在代码中直接指定类型参数，
  从实际值参数中也无法推测出时，这个默认类型就会起作用
 */
function createArray<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

class GenericNumber<T> {
    constructor(public zeroValue: T, public add: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.add = add;
    }
    // zeroValue: T;
    // add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>(0, function(x, y) { return x + y;});
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

