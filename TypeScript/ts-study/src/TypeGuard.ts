// 类型守卫说白了就是缩小类型的范围，我们看几个例子就容易理解了
// instanceof

class Person {
    name = 'xiaomuzhu';
    age = 20;
}

class TypeAnimal {
    name = 'petty';
    color = 'pink';
}

function getSomthing(arg: Person | TypeAnimal) {
    // 类型细化为Person
    if (arg instanceof Person) {
        // console.log(arg.color); // error, 因为arg被细化为Person，而Person上不存在 color属性
        console.log(arg.age); // ok
    }
    // 类型细化为TypeAnimal
    if (arg instanceof TypeAnimal) {
        // console.log(arg.age); // error, 因为arg被细化为Animal，而TypeAnimal上不存在 age 属性
        console.log(arg.color);
    }
}

// in
// 跟上面的例子类似，x in y 表示 x 属性在 y 中存在

function getpertoty (arg: Person | TypeAnimal) {
    if ('age' in arg) {
        // console.log(arg.color); // error
        console.log(arg.age); // ok
    }
    if ('color' in arg) {
        // console.log(arg.age); // error
        console.log(arg.color); // ok
    }
}


/* 
    字面量类型守卫
    这个功能很重要，在后面的联合辨析类型中会用到此特性，
    当你在联合类型里使用字面量类型时，它可以帮助检查它们是否有区别
*/

type Foo = {
    kind: 'foo';
    foo: number;
}

type Bar = {
    kind: 'bar';
    bar: number;
}

function doStuff (arg: Foo | Bar) {
    if (arg.kind === 'foo') {
        console.log(arg.foo); // ok
        // console.log(arg.bar); // error
    }
    if (arg.kind === 'bar') {
        // console.log(arg.foo); // Error
        console.log(arg.bar); // ok
    }
}



