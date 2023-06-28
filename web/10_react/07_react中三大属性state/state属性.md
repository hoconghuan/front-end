
state属性和有点像Vuex中的 status属性， 都是  state = { } 里面是key : value的形式。

但是state是react的基本属性， 对state数据的修改不能是直接赋值的形式，  需要调用this.setState({}) key : value ， 
    vue也是不能直接赋值的，需要调用 object.defineProperty 的 set(target,props,函数)函数

