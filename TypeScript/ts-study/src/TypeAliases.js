"use strict";
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
// 上例中，我们使用 type 创建类型别名。
// 类型别名常用于联合类型
