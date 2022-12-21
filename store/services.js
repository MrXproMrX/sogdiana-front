export const state = () => ({
    services:[]
})

export const mutations = {
    setservices(state, services){
        state.services = services
    }
}

export const actions = {
    async fetchServices({commit}){
        const services = await this.$axios.$get('/api/services')
        commit('setservices', services)
    }
}

export const getters = {
    services: s => s.services
}