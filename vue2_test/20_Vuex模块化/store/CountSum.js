export default {
    namespaced: true,
    state: {
        sum: 0,

    },
    actions: {
        addOdd(context, value) {
            if (context.state.sum % 2) context.commit('increment', value)
        },
        addWait(context, value) {
            setTimeout(() => {
                context.commit('increment', value)
            }, 500)
        },
    },
    mutations: {
        increment(state, value) {
            state.sum += value        //mutation是直接操作 state的   上下文context 是在 action 和commit时才用的
        },
        decrement(state, value) {
            state.sum -= value
        },
    },

}