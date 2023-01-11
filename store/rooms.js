export const state = () => ({
    rooms:[]
})

export const mutations = {
    setRooms(state, rooms){
        state.rooms = rooms
    }
}

export const actions = {
    async fetchRooms({commit}){
        const rooms = await this.$axios.$get('/api/rooms')
        commit('setRooms', rooms)
    }
}

export const getters = {
    rooms: s => s.rooms
}
