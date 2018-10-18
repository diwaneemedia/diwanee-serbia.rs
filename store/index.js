import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0,
      gameStarted: false,
      video: {},
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
