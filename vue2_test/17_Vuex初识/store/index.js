// 引入vue
import vue from 'vue'
// 引入vuex
import vuex from 'vuex'

vue.use(vuex)

// 在Vuex对store的操作 表示是 action，muatation，state这几个的操作， 就是Vuex中action，muatation，state 这几个对象的操作，但是在组件 component中 表示的是在Vuex中action，muatation，state 这几对象输入之前的操作，

// state：这里存放的是数据， 在vue中 state / data 都是指数据 。 所以一般都是 state.xxxx  表示读取里面的某个数据

// muatation： 这里是对数据 state / data 的操作， 即对数据的增删改查 crud 。   一般写法： 在muatation中调用xx方法 完成对数据操作

// action：这里是进行条件判断，拿着结果送到 muatation进行增删改查。

//  特殊点：getter。   Vuex来自Vue，所以 state表示数据  而这里的getter表示 计算属性 computed

// 创建store
export default new vuex.Store({
    actions: {
        addOdd(context, value) {
            if (context.state.sum % 2) context.commit('increment', value)
        },
        addWait(context, value) {
            setTimeout(() => {
                context.commit('increment', value)
            }, 500);
        }
    },
    mutations: {
        increment(state, value) {
            state.sum += value;
        },
        decrement(state, value) {
            state.sum -= value;
        }
    },
    state: {
        sum: 0,
        name: 'andy',
        age: 18
    }

})