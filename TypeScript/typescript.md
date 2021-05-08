## [TypeScript的静态类型](https://jspang.com/detailed?id=66#toc25)

[如何定义静态类型](https://jspang.com/detailed?id=66#toc36)

你可以在上节课的文件夹下建立一个新的`demo2.ts`文件，然后写下这段代码：

```js
const count : number = 1;
```

这就是最简单的定义一个数字类型的`count`的变量，这里的`: number`就是定义了一个静态类型。这样定义后`count`这个变量在程序中就永远都是数字类型了，不可以改变了。比如我们这时候给`count`复制一个字符串，它就报错了。

```js
//错误代码
const count : number = 1;
count = 'jspang'
```

但这只是最简单的理解，再往深一层次理解，你会发现这时候的`count`变量,可以使用`number`类型上所有的属性和方法。我们可以通过在`count`后边打上一个`.`看出这个特性，并且编辑器会给你非常好的提示。这也是为什么我喜欢用`VScode`编辑器的一个原因。

[自定义静态类型](https://jspang.com/detailed?id=66#toc37)

你还可以自己去定义一个静态类型，比如现在你定义一个`小姐姐`的类型，然后在声明变量的时候，就可以使用这个静态类型了，看下面的代码。

```js
interface XiaoJieJie {
    uname: string ,
    age:number
} 

const  xiaohong : XiaoJieJie ={
    uname: '小红',
    age: 18
}
```

这时候你如果声明变量，跟自定义不一样，`VSCode`直接就会报错。需要注意的是，这时候`xiaohong`变量也具有`uname`和`age`属性了。

这节课你需要记住的是，如果使用了静态类型，不仅意味着变量的类型不可以改变，还意味着类型的属性和方法也跟着确定了。这个特点就大大提高了程序的健壮性，并且编辑器这时候也会给你很好的语法提示，加快了你的开发效率。

随着你不断的深入学习，你会对这两个优点有更深的理解。









## [TypeScript基础静态类型和对象类型](https://jspang.com/detailed?id=66#toc28)

在TypeScript静态类型分为两种，一种是基础静态类型，一种是对象类型，这两种都经常使用，非常重要，我们先来看一下什么是基础静态类型。



[基础静态类型](https://jspang.com/detailed?id=66#toc39)

基础静态类型非常简单，只要在声明变量的后边加一个`:`号，然后加上对应的类型哦。比如下面的代码，就是声明了一个数字类型的变量，叫做`count`。

```js
const count : number = 918;
const myName ：string = 'jspang'
```

类似这样常用的基础类型还有，我这里就举几个最常用的哦,`null`,`undefinde`,`symbol`,`boolean`，`void`这些都是最常用的基础数据类型，至于例子，我这里就不详细的写了，后面碰到，我们再继续讲解。

[对象类型](https://jspang.com/detailed?id=66#toc310)

我们先来看一个例子，通过例子有经验的小伙伴就知道个大概了，然后我们再来讲解(其实上节课我们也讲到了，我们这里就当复习了)。新建一个文件`demo3.ts`（你可以跟我不一样）,然后写下如下代码。

```js
const xiaoJieJie:{
    name:string,
    age:number
} = {
    name:'大脚',
    age:18
}
console.log(xiaoJieJie.name)
```

写完后，我们在`terminal`（终端）中输入`ts-node demo3.ts`，可以看到结果输出了`大脚`。这就是一个经典的对象类型，也是最简单的对象类型。对象类型也可以是数组，比如现在我们需要很多小姐姐，我们就可以这样写。

```js
const xiaoJieJies : String [] = ['谢大脚','刘英','小红']
```

这时候的意思是，变量`xiaoJieJies`必须是一个数组，数组里的内容必须是字符串。你可以试着把字符串改为数字，`VSCode`会直接给我们报错。

```js
const xiaoJieJies : String [] = ['谢大脚','刘英',123]
```

现在都讲究面向对象编程，我这面向对象编程这么多年了，也没再多编出来一个。我们再来看看下面的代码。这个代码就是用类的形式，来定义变量。

```js
class Person{}
const dajiao : Person = new Person()
```

这个意思就是`dajiao`必须是一个`Person`类对应的对象才可以。我们还可以定义一个函数类型，并确定返回值。代码如下：

```js
const jianXiaoJieJie : ()=> string =()=>{return '大脚'}
```

那我们现在总结一下对象类型可以有几种形式：

- 对象类型
- 数组类型
- 类类型
- 函数类型

这几种形式我们在`TypeScript`里叫做对象类型。

这节课我们就主要学习了基础类型和对象类型的概念，希望小伙伴都能学会，再次提醒，动手练习会有更好的效果。小伙伴们，加油。







## [类型注释和类型推断](https://jspang.com/detailed?id=66#toc211)

这节课我们学习一下TypeScript中的两个基本概念：`类型注解`和`类型推断`，这两个概念在我们编写TypeScript代码时会一直使用(重点)，但很多教程都没有讲解，不过在官方文档中有比较好的解释。你现在可能还不能完全理解我说的这两个概念，但是你看完文章后就会有很直观的了解啦。

[type annotation 类型注解](https://jspang.com/detailed?id=66#toc312)

这个概念我们在前三节课中一直使用，只是我没明确这个概念和关系，所以你会觉的很陌生。这就好比，你身边有一个特别漂亮的姑娘，她一直很喜欢你，你也很喜欢她，但窗户纸一直没捅破，直到有一天你们喝多后，去了如家酒店（谈了谈心），你们的关系就明确了。

学程序并没有这么复杂，我们直接点，新建一个文件`demo4.ts` ,然后看代码：

```js
let count : number; 
count = 123
```

这段代码就是类型注解，意思是显示的告诉代码，我们的`count`变量就是一个数字类型，这就叫做`类型注解`。是不是一下就明白了，其实程序这东西就这么简单，真正复杂的是人。

[type inferrence 类型推断](https://jspang.com/detailed?id=66#toc313)

当你明白了`类型注解`的概念之后，再学类型推断就更简单了，先来看一段代码。还是在`Demo4.ts`文件中写入下面的代码。

```js
let countInference = 123
```

这时候我并没有显示的告诉你变量`countInference`是一个数字类型，但是如果你把鼠标放到变量上时，你会发现TypeScript自动把变量注释为了`number`（数字）类型，也就是说它是有某种推断能力的，通过你的代码TS会自动的去尝试分析变量的类型。这个就彷佛是人的情商比较高，还没等女生表白那，你就已经看出她的心思。

[工作使用问题（潜规则）](https://jspang.com/detailed?id=66#toc314)

- 如果 `TS` 能够自动分析变量类型， 我们就什么也不需要做了
- 如果 `TS` 无法分析变量类型的话， 我们就需要使用类型注解

先来看一个不用写类型注解的例子：

```js
const one = 1;
const two = 2;
const three = one + two;
```

再来看一个用写类型注解的例子：

```js
function getTotal(one , two){
    return one + two
}

const total = getTotal(1,2)
```

这种形式，就需要用到类型注释了，因为这里的`one`和`two`会显示为`any`类型。这时候如果你传字符串，你的业务逻辑就是错误的，所以你必须加一个`类型注解`，把上面的代码写成下面的样子。

```js
function getTotal(one : number, two :number){
    return one + two
}

const total = getTotal(1,2)
```

这里有的一个问题是，为什么`total`这个变量不需要加类型注解，因为当`one`和`two`两个变量加上注解后，TypeScript就可以自动通过类型推断，分析出变量的类型。

当然TypeScript也可以推断出对象中属性的类型，比如现在写一个小姐姐的对象，然后里边有两个属性。

```js
const XiaoJieJie = {
    name:'刘英',
    age:18
}
```

写完后你把鼠标放在`XiaoJieJie`对象上面，就会提示出他里边的属性，这表明TypeScript也分析出了对象的属性的类型。

在写TypeScript代码的一个重要宗旨就是每个变量，每个对象的属性类型都应该是固定的，如果你推断就让它推断，推断不出来的时候你要进行注释。









## [函数参数和返回类型定义](https://jspang.com/detailed?id=66#toc215)

这节主要学习一下函数的参数类型定义和返回值的定义，学完这节内容后，你会对函数的参数和返回值类型定义都有通透的了解。

[简单类型定义](https://jspang.com/detailed?id=66#toc316)

上节课我们写了一个`getTotal`的函数，并且对传入的参数作了定义，我们再复习一遍。

新建一个文件`demo5.ts`,然后写入代码

```js
function getTotal(one : number, two :number){
    return one + two
}

const total = getTotal(1,2)
```

这时候我们写的代码其实是有一个小坑的，就是我们并没有定义`getTotal`的返回值类型，虽然`TypeScript`可以自己推断出返回值是`number`类型。 但是如果这时候我们的代码写错了，比如写程了下面这个样子。

```js
function getTotal(one : number, two :number){
    return one + two+ ''
}

const total = getTotal(1,2)
```

这时候`total`的值就不是`number`类型了，但是不会报错。有的小伙伴这时候可能会说，可以直接给`total`一个类型注解，比如写成这个样子。

```js
const total : number =getTotal(1,2) 
```

这样写虽然可以让编辑器报错，但是这还不是很高明的算法，因为你没有找到错误的根本，这时错误的根本是`getTotal()`函数的错误，所以合适的做法是给函数的返回值加上类型注解，代码如下：

```js
function getTotal(one : number, two :number) : number{
    return one + two
}

const total = getTotal(1,2)
```

这段代码就比较严谨了，所以小伙伴们在写代码时，尽量让自己的代码更加严谨。

[函数无返回值时定义方法](https://jspang.com/detailed?id=66#toc317)

有时候函数是没有返回值的，比如现在定义一个`sayHello`的函数，这个函数只是简单的`terminal`打印，并没有返回值。

```js
 function sayHello(){
     console.log('hello world')
 }
```

这就是没有返回值的函数，我们就可以给他一个类型注解`void`，代表没有任何返回值。

```js
 function sayHello() : void{
     console.log('hello world')
 }
```

如果这样定义后，你再加入任何返回值，程序都会报错。

[never返回值类型](https://jspang.com/detailed?id=66#toc318)

如果一个函数是永远也执行不完的，就可以定义返回值为`never`，那什么样的函数是永远也执行不完的那?我们先来写一个这样的函数(比如执行执行的时候，抛出了异常，这时候就无法执行完了)。

```js
 function errorFuntion() : never{ 
    throw new Error()
    console.log('Hello World')
 }
```

还有一种是一直循环，也是我们常说的死循环，这样也运行不完，比如下面的代码：

```js
 function forNever() : never{
     while(true){}
     console.log('Hello JSPang')
 }
```

[函数参数为对象(解构)时](https://jspang.com/detailed?id=66#toc319)

这个坑有很多小伙伴掉下去过，就是当一个函数的参数是对象时，我们如何定义参数对象的属性类型。我先写个一般`javaScript`的写法。

```js
 function add ({one , two}){
     return one + two
 }

 const total = add({one:1,two:2})
```

在浏览器中你会看到直接报错了，意思是`total`有可能会是任何类型，那我们要如何给这样的参数加`类型注解`那？最初你可能会这样写。

```js
 function add ({one :number , two :number}){
     return one + two
 }

 const total = add({one:1,two:2})
```

你在编辑器中会看到这种写法是完全错误的。那正确的写法应该是这样的。

```js
 function add ({one , two } : {one:number, two:number}) :number{
     return one + two
 }

 const three = add({one:1,two:2})
```

如果参数是对象，并且里边只有一个属性时，我们更容易写错。 错误代码如下：

```js
function getNumber ({one }:number){
     return one;
 }

 const one = getNumber({one:1})
```

看着好像没什么问题，但实际这是有问题的，正确的代码应该时这样的。

```js
 function getNumber ({one } :{one:number}) :number{
     return one;
 }

 const one = getNumber({one:1})
```

这样写才是正确的写法，小伙伴们赶快动手练习一下吧，刚开始学你可能会觉的很麻烦，但是你写的时间长了，你就会发现有规矩还是好的。人向往自由，缺鲜有人能屈驾自由。





## [数组类型的定义](https://jspang.com/detailed?id=66#toc220)

这节课学习一下TypeScript中的数组类型，一般的数组类型定义我们已经接触过了，只是没有单独拿出来讲，所以先来复习一下。

[一般数组类型的定义](https://jspang.com/detailed?id=66#toc321)

现在我们可以定义一个最简单的数组类型，比如就是数字类型，那么就可以这么写：

```js
const numberArr = [1,2,3] 
```

这时候你把鼠标放在`numberArr`上面可以看出，这个数组的类型就是number类型。这是TypeScript通过`类型推断`自己推断出来的。 如果你要显示的注解，也非常简单，可以写成下面的形式。

```js
const numberArr:number[] = [1,2,3] 
```

同样道理，如果你的数组各项是字符串，你就可以写成这样。

```js
const stringArr : string [] = ['a','b','c']
```

也就是说你可以定义任意类型的数组，比如是`undefined`。

```js
const undefinedArr : undefined[]=[undefined,undefined]
```

这时候问题来了，如果数组中有多种类型，比如既有数字类型，又有字符串的时候。那我们要如何定义那。 很简单，只要加个`()`，然后在里边加上`|`就可以了，具体看代码。

```js
const arr: ( number| string )[] = [1,'string',2]
```

数组简单类型的定义就是这样了，并不难。

[数组中对象类型的定义](https://jspang.com/detailed?id=66#toc322)

如果你作过一些项目，你就会知道真实的项目中数组中一定会有对象的出现。那对于这类带有对象的数组定义就稍微麻烦点了。 比如现在我们要定义一个有很多小姐姐的数组，每一个小姐姐都是一个对象。这是的定义就编程了这样。

```js
const xiaoJieJies : {name:string , age:Number}[] = [
    {name:'刘英',age:18},
    {name:'谢大脚',age:28}
]
```

这种形式看起来比较麻烦，而且如果有同样类型的数组，写代码也比较麻烦，TypeScript为我们准备了一个概念，叫做`类型别名`(type alias)。

比如刚才的代码，就可以定义一个`类型别名`，定义别名的时候要以`type`关键字开始。现在定义一个`Lady`的别名。

```js
type  Lady  =  {name:string , age:Number};
```

有了这样的类型别名以后哦，就可以把上面的代码改为下面的形式了。

```js
type  Lady  =  {name:string , age:Number};

const xiaoJieJies : Lady[] = [
    {name:'刘英',age:18},
    {name:'谢大脚',age:28}
]
```

这样定义是完全起作用的，比如我们下面在对象里再加入一个属性，这时候编译器就会直接给我们报错了。

这时候有的小伙伴就会问了，我用类进行定义可以吗？答案是可以的，比如我们定义一个`Madam`的类,然后用这个类来限制数组的类型也是可以的。

```js
class Madam {
    name: string ;
    age:number ;
}

const xiaoJieJies : Madam[] = [
    {name:'刘英',age:18},
    {name:'谢大脚',age:28}
]
```

可以看到结果，我们这么写也是完全可以的。

这就是这节课的所有内容了，希望小伙伴们可以学会，并动手练习一下。