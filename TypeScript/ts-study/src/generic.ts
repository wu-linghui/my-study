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

class Demo2<T extends FirstInterface & SecondInterface> {
    private genericProperty!: T
  
    useT() {
      this.genericProperty.doSomething() // ok
      this.genericProperty.doSomethingElse() // ok
    }
  }

