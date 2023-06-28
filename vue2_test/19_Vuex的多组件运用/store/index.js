import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)
import { nanoid } from 'nanoid'
export default new Vuex.Store({
    state: {
        sum: 0,
        name: 'andy',
        age: 18,
        persons: [
            { id: nanoid(), name: 'andy' }
        ]
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
        AddPersonsName(state, person) {
            state.persons.unshift(person)
        }
    },

})