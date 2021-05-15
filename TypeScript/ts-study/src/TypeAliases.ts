type Name = string;
type Name2 = () => string;
type NameAliases = Name | Name2;

function getName (n: NameAliases): Name {
    if (typeof n === 'string') {
        return n;    
    } else {
        return n();
    }
}

// 上例中，我们使用 type 创建类型别名。
// 类型别名常用于联合类型

