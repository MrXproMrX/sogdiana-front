export const state = () => ({
    page:[]
})

export const mutations = {
    setpage(state, page){
        state.page = page
    }
}

export const actions = {
    async fetchPage({commit}){
        const page = await this.$axios.$get(`api/page?id=1&lang=${this.$i18n.locale}`)
        commit('setpage', page)
    }
}

export const getters = {
    page: s => s.page
}
