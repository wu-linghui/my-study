async function main() {
    // await后面的代码如果返回的是一个Promise按返回的Promise运行
    // 不是的话，隐式调用处理成Promise.resolve(P890)
    const number = await P890;
    console.log(number);
}

main();

