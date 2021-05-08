// const numArray = [1,2,3];

const numArray : number[] = [1,2,3];
const stringArr : string[] = ["1",'2','3'];
const undefinedArr : undefined[] = [undefined, undefined, undefined];


// 混合数组
const arr : (number | string)[] = [1,'2',3];

// type alias 类型别名
type type = {name: string, age: number}
// 也可以是类的class形式
class type1 {
    name: string;
    age: number;
}


// let mixArr : {name:string, age:number}[] = [
//     {name:'吴凌晖',age:18},
//     {name:'林允儿',age:22}
// ];

let mixArr : type[] = [
        {name:'吴凌晖',age:18},
        {name:'林允儿',age:22}
    ];
