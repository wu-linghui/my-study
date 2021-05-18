// 合并的属性的类型必须是唯一的
// 接口中方法的合并，与函数的合并一样
interface Alarm3 {
    price: number;
    alert(s: string): string;
}
interface Alarm3 {
    weight: number;
    alert(s: string, n: number): string;
}


// 相当于：
interface Alarm4 {
    price: number;
    weight: number;
    alert(s: string): string;
    alert(s: string, n: number): string;
}

