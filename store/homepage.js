export const state = () => ({
    sliders: [],
    rooms:[],
    services:[],
    articles:[],
})

export const getters = {
    sliders: (state) => state.sliders,
    rooms: (state) => state.rooms,
    services: (state) => state.services,
    articles: (state) => state.articles,
}

export const mutations = {
    SET_SLIDERS(state, payload) {
        state.sliders = payload
    },

    SET_ROOMS(state,payload){
        state.rooms = payload
    },

    SET_SERVICES(state,payload){
        state.services = payload
    },

    SET_ARTICLES(state,payload){
        state.articles = payload
    }
}

export const actions = {
    async fetchHomepage({ commit }) {
        try {
            const res = await this.$axios('/api/homepage')
            const data = res.data.data;
            commit('SET_SLIDERS', data.sliders)
            commit('SET_ROOMS',data.rooms)
            commit('SET_SERVICES', data.services)
            commit('SET_ARTICLES', data.articles)
        } catch (err) {
            console.error(err)
        }
    }
}