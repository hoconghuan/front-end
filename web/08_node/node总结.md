#

1、生成node服务端

    1、先要引入模块，并且模块是用commonJS格式   const  express = require('express')

    2、生成express实例   const app = express()

    3、、创建好实例后需要开启端口，启动服务器    app.listen(3000);

 2、node和客户端数据互传

    1、为了让程序在引入路径不报错 需要使用 path
            const path = require('path')

            express上的方法使用绝对路径，(path.resolve(__dirname,'名称'))

    2、交互主要为 post和get请求    

        get：  服务器端用 req.query或者 req.param接收参数  区别详见vue路由

        post:  服务端用 req.body 接收参数   但是需要在之前使用express的urlencoded  app.use(express.urlencoded({extended: true})) 后面的配置必须有，虽然现在没意义

3、使用模板引擎

    1、用ejs模块引擎编写服务端网页代码，除了动态数据用 <%= %> 表示， 其他和普通页面是一致的， 需要先在node的index中使用ejs    app.set('view engine', 'ejs')     app.set('views'，path.join(__dirname, '可视对象'))。
        动态数据是<%= %> 里面是填数据， <% %>里面填的是JS语句
        动态数据是<%= %> 里面是填数据， <% %>里面填的是JS语句
        动态数据是<%= %> 里面是填数据， <% %>里面填的是JS语句

    2、操作完后要使用重定向   res.redirect('路径')

4、为什么会用router

    这里的router相当于vue中的组件，创建routes文件夹把index中对客户端的响应按分类封装起来，为了以后项目复杂后不互耦。 剥离出来的index和vue中的app组件很像，只是一个管理壳子，只有对router组件的引用。不产生任何交互。

    1、在每个router文件中按需引入， 为了避免每个router导出时命名重复，会在index中都会添加自己的路径避免命名冲突，然后router根据需要添加路径。
     router文件中：导出语法   module.export =  router

     index中引入：
        const 名称 = require('文件路径')
        app.use('命名路径'，名称)         
            或者 直接 app.use('命名路径', require('文件路径'))

    2、在views文件下的所有ejs文件的请求路径都要加上命名路径，再加 router中 post、get、use这些的跳转路径。
