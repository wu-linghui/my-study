"use strict";
// 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约
/* 我们必须用一种类型描述这个 user 参数，
   但是这个类型又不属于上一节介绍到的各种基本类型。
   这个时候我们需要 interface 来描述这个类型: */
const getUserName = (user) => user.name;
getUserName({ age: 123, name: '123', isMale: false, say: (words) => { return 'hello'; } });
function CalculateAreas(config) {
    let square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return { area: square };
}
// let mySquare = CalculateAreas({widdth: 5});
// 对象文字只能指定已知的属性，但“widdth”中不存在类型“Config”
// 解决方法
// 第一种使用类型断言
let mySquare = CalculateAreas({ widdth: 5 });
// 第三种将字面量赋值给另外一个变量
let options = { widdth: 5 }; // 本质上是转化为 any 类型
let mySquare2 = CalculateAreas(options);
// interface VIPUser extends User, Say {
//     broadcast?: () => void;
// }
let getVIPUser = (vipuser) => vipuser.name;
// getVIPUser({name: 'we', isMale: false, say: (words:string)=> {return words}});
getVIPUser({ say: (words) => { return 'hello'; }, broadcast: () => { } });
