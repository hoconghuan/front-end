setTimeout(() => console.log("代码开始执行"), 0); //4
new Promise((resolve, reject) => {
    console.log("开始for循环"); // 1
    for (let i = 0; i < 10000; i++) {
        i == 99 && resolve();
    }
}).then(() => console.log("执行then函数")); // 3
console.log("代码执行结束"); // 2