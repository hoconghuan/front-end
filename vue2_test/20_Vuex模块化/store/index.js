import Vue from 'vue'

import Vuex from 'vuex'

import PersonList from "./PersonList";
import CountSum from './CountSum'
Vue.use(Vuex)
// import { nanoid } from 'nanoid'

// 这里等同于vue将 JS代码拆成各个模块，这样明确每个模块的用途。


export default new Vuex.Store({
    modules: {
        CountSum,
        PersonList
    }


})