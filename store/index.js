import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0,
      sideBarOpen: false,
      gameStarted: false,
      video: {},
      videoMob: {}
    }),
    mutations: {
      increment(state) {
        state.counter++
      },
      // startGame() {
      //   $store.state.gameStarted = false;
      // },
    }
  })
}

export default createStore
