
// 引入vue
import vue from 'vue'
// 引入vuex
import vuex from 'vuex'

vue.use(vuex)

const actions = {

    addOdd(context, value) {
        if (context.state.sum % 2) context.commit('increment', value)
    },
    addWait(context, value) {
        setTimeout(() => {
            context.commit('increment', value)
        }, 500);
    }
};
const mutations = {
    increment(state, value) {
        state.sum += value;     //mutation是直接操作 state的   上下文context 是在 action 和commit时才用的
    },
    decrement(state, value) {
        state.sum -= value;
    }
};
const state = {
    sum: 0,
    name: 'andy',
    age: 18

}


// 创建store
export default new vuex.Store({
    actions,
    mutations,
    state,
})