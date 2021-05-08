function getTotal(one : number, two : number) : number {
    // return one + two + ''; // 不报错将total改成string类型，在函数注释类型即可function getTotal(one : number, two : number) : number 
    return one + two;
}

let total = getTotal(1,2);

// void这个注释为改函数不会有任何返回值
function sayHey() : void{
    console.log('hello world');
    // return ''; // 报错
}


function error() : never{
    throw new Error('错误');
    console.log('123');
}


function fornever() : never{
    while (true) {
        console.log('never');
    }
}

function add({one, two} : {one: number, two: number}){
    return one + two;
}

const ad = add({one: 1, two: 2});


function getNumber({one} : {one: number}){
    return one;
}

const one = getNumber({one: 1});

