"use strict";
let tuple;
// 需初始化元组
tuple = ['test', 12];
tuple[0] = 'tom';
tuple[1] = 25;
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
tuple.push('man');
// tuple.push(true) //error 类型“boolean”的参数不能赋给类型“string | number”的参数
