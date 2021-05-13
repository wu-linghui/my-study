// 重载（Overload）
function assigned (a: number, b?: number, c?: number, d?: any) {
    if (b === undefined && c === undefined && d === undefined) {
      b = c = d = a
    } else if (c === undefined && d === undefined) {
      c = a
      d = b
    }
    return {
      top: a,
      right: b,
      bottom: c,
      left: d
    }
}

function sum(x: number, y: number = 2) {
  // if (y) {
    return x + y;
  // }
}
function sum2(x: number, y?: number) {
  if (y) {
    return x + y;
  }
}
// sum(1); // 少于两个参数
// sum(1,2,3) // 多余两个参数


// 函数表达式
/* 
  在 TypeScript 的类型定义中，
  => 用来表示函数的定义，
  左边是输入类型，需要用括号括起来，
  右边是输出类型
 */
let arrow: (x: number, y:number) => number  = function sum2 (x: number, y: number): number {
  return x + y;
}


/*
  也可以使用接口的方式来定义一个函数需要符合的形状
 */
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
}


// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

reverse('123');
reverse(123);


