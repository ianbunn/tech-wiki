import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex);

// Store is a method where an object is passed as an argument
export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations,
    actions,
    modules: {
        counter
    }
})