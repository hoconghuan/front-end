# promise的整体运用

在这里时彻底解决了自己关于学习promise时相关的问题。

Q1、 try catch 有什么卵用

Q2、 async await  到底他妈怎么用

Q3、catch的异常穿透又是什么吊东西

A1:  try catch 的使用：
    try{
        这里填运算逻辑及结果
    }   catch{
        这里是关于问题的处理 （这里的问题可以是 try 运行中出现的任何故障）
    }

A2：    async await 的使用：
    async await是属于promise的语法糖， 直接让function函数 变成异步操作。  
    使用    async  ()=>{
                   await  异步操作
                 }

A3： catch 能把整个promise中的问题全部抛出。 不用在每个异步中中添加错误的抓取。
