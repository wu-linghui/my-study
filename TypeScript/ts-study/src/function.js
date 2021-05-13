"use strict";
// 重载（Overload）
function assigned(a, b, c, d) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    };
}
function sum(x, y = 2) {
    // if (y) {
    return x + y;
    // }
}
function sum2(x, y) {
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
let arrow = function sum2(x, y) {
    return x + y;
};
let mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
reverse('123');
reverse(123);
