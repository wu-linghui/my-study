/* 
    类型兼容性
    类型兼容性用于确定一个类型是否能赋值给其他类型
*/

let z = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = z; // OK
// x = y; // Error 不能将类型“(b: number, s: string) => number”分配给类型“(a: number) => number”。


let foo = (x: number, y: number) => {};
let bar = (x?: number, y?: number) => {};
let bas = (...args: number[]) => {};
/* 
    不能将类型“(...args: number[]) => void”分配给类型“(x?: number | undefined, y?: number | undefined) => void”。
  参数“args”和“x” 的类型不兼容。
    不能将类型“number | undefined”分配给类型“number”。
      不能将类型“undefined”分配给类型“number”。
*/
// 原因就是可选类型的参数可能为 undefined，在这种情况下不能与 number 兼容。

// foo = bar = bas;
// bas = bar = foo;

// 当我们把 strictNullChecks 设置为 false 时上述代码是兼容的。


// 枚举的类型兼容性————枚举与数字类型相互兼容
enum Status {
    Ready,
    Waiting
  }
  
  let status1 = Status.Ready;
  let num = 0;
  
  status1 = num;
  num = status1;

// 类的类型兼容性 ————仅仅只有实例成员和方法会相比较，构造函数和静态成员不会被检查:
class TAnimal2 {
    feet: number;
    constructor(name: string, numFeet: number) {
        this.feet = numFeet;
    }
  }
  
  class Size {
    feet: number;
    constructor(meters: number) {
        this.feet = meters;
    }
  }
  
  let a2: TAnimal2;
  let s: Size;
  
  a2 = s!; // OK 
//   s = a2; // OK


function greeter2(person: string) {
    return "Hello, " + person
}

let arr1 = [1, 'one', 1n]
