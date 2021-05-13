interface Cat {
    name: string;
    run(): void;
}

interface Fish {
    name: string;
    swim: void;
}

// 此时可以使用类型断言，将 animal 断言成 Fish
function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}


class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}

// 类型为类约束时，使用类型断言判断，或者instanceof判断
function isApiError(error: Error) {
    if (error instanceof ApiError) {
    // if (error as ApiError) {
        return true;
    }
    return false;
}


interface ApiError extends Error {
    code: number;
}
interface HttpError extends Error {
    statusCode: number;
}

// 类型为接口约束时，只能使用类型断言判断
function isApiError2(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}


// 调用完 getCacheData 之后，立即将它断言为 Cat 类型。
// 这样的话明确了 tom 的类型，后续对 tom 的访问时就有了代码补全，
// 提高了代码的可维护性
function getCacheData(key: string): any {
    return (window as any).cache[key];
}

const tom = getCacheData('tom') as Cat;
tom.run();

const test:Cat = getCacheData('tom');
test.run();

/* 深入的讲，它们的核心区别就在于：

animal 断言为 Cat，只需要满足 Animal 兼容 Cat 或 Cat 兼容 Animal 即可
animal 赋值给 tom，需要满足 Cat 兼容 Animal 才行 
*/

interface Animal2 {
    name: string;
    run(): void;
}
interface Cat2 {
    name: string;
}

const animal2: Animal2 = {
    name: 'tom',
    run: () => {console.log('run')}
};
// 
let tom4 = animal2 as Cat2;
let tom3: Cat2 = animal2; 

// 泛型

function getFX<T> (key: string): T {
    return (window as any).cache[key];
}

interface Cat3 {
    name: string;
    run(): void;
}

const CAT = getFX<Cat3> ('tom');

CAT.run();
