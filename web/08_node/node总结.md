#

1、生成node服务端

    1、先要引入模块，并且模块是用commonJS格式   const  express = require('express')

    2、创建好实例后需要开启端口，启动服务器    app.listen(3000);

 2、 node和客户端数据互传

    1、为了让程序在引入路径不报错 需要使用 path
            const path = require('path')

            将生成的express实例app上使用express的静态绝对路径，app.use(express.static(path.resolve(__dirname,'名称')))

    2、交互主要为 post和get请求    

        get：  服务器端用 req.query或者 req.param接收参数  区别详见vue路由

        post:  服务端用 req.body 接收参数   但是需要在之前使用express的urlencoded  app.use(express.urlencoded({extended: true})) 后面的配置必须有，虽然现在没意义
 
    3、 用ejs模块引擎编写服务端网页代码，除了动态数据用 <%= %> 表示， 其他和普通页面是一致的， 需要先使用ejs    app.set('view engine', 'ejs')     app.set('views'，path.join(__dirname, '可视对象'))。
        动态数据是<%= %> 里面是填数据， <% %>里面填的是JS语句
        动态数据是<%= %> 里面是填数据， <% %>里面填的是JS语句
        动态数据是<%= %> 里面是填数据， <% %>里面填的是JS语句
