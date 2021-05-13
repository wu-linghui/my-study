"use strict";
// 此时可以使用类型断言，将 animal 断言成 Fish
function isFish(animal) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
class ApiError extends Error {
    constructor() {
        super(...arguments);
        this.code = 0;
    }
}
class HttpError extends Error {
    constructor() {
        super(...arguments);
        this.statusCode = 200;
    }
}
// 类型为类约束时，使用类型断言判断，或者instanceof判断
function isApiError(error) {
    if (error instanceof ApiError) {
        // if (error as ApiError) {
        return true;
    }
    return false;
}
// 类型为接口约束时，只能使用类型断言判断
function isApiError2(error) {
    if (typeof error.code === 'number') {
        return true;
    }
    return false;
}
// 调用完 getCacheData 之后，立即将它断言为 Cat 类型。
// 这样的话明确了 tom 的类型，后续对 tom 的访问时就有了代码补全，
// 提高了代码的可维护性
function getCacheData(key) {
    return window.cache[key];
}
const tom = getCacheData('tom');
tom.run();
const test = getCacheData('tom');
test.run();
const animal2 = {
    name: 'tom',
    run: () => { console.log('run'); }
};
// 
let tom4 = animal2;
let tom3 = animal2;
// 泛型
function getFX(key) {
    return window.cache[key];
}
const CAT = getFX('tom');
CAT.run();
