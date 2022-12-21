export const state = () => ({
    options:[]
})

export const mutations = {
    setOptions(state, options){
        state.options = options
    }
}

export const actions = {
    async fetchOptions({commit}){
        const options = await this.$axios.$get('/api/options')
        commit('setOptions', options)
    }
}

export const getters = {
    options: s => s.options
}