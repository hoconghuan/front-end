export default {
    namespaced: true,
    state: {
        persons: []
    },
    actions: {},
    mutations: {
        AddPersonsName(state, person) {
            state.persons.unshift(person)
        }
    },

}