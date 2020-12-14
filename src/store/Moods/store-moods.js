import Vue from 'vue'

const state = {
    moods: {
        'ID1': {
            title: 'Freude',
            level: 0,
        },
        'ID2': {
            title: 'Trauer',
            level: 0,
        },
        'ID3': {
            title: 'Ärger',
            level: 0,
        },
        'ID4': {
            title: 'Furcht',
            level: 0,
        },
    }
}

const mutations = {
    updateMood(state, payload) {
        Object.assign(state.moods[payload.id], payload.updates)
    },
    deleteMood(state, id) {
        Vue.delete(state.moods, id)
    }
}

const actions = {
    updateMood({commit}, payload) {
        commit('updateMood', payload)
    },
    deleteMood({ commit }, id) {
        commit('deleteMood',id)
    }
}

const getters = {
    moods: (state) => {
        return state.moods
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

