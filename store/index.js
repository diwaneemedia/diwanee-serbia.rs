import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0,
      gameStarted: false,
    }),
    mutations: {
      increment(state) {
        state.counter++
      },
      startGame() {
        $store.state.gameStarted = true;
      },
    }
  })
}

export default createStore
