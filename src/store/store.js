import {
  createStore
} from 'vuex'

// Create a new store instance.
const store = createStore({
  state: {
    selectedColors: [{
        "pantoneId": "16-1650 TN",
        "hex": "#FF1659",
        "name": "Fluro Pink",
        "type": ["synthetic"]
      },
      {
        "pantoneId": "15-1456 TN",
        "hex": "#FF4F58",
        "name": "Fluro Coral",
        "type": ["synthetic"]
      },
      {
        "pantoneId": "16-6230 TN",
        "hex": "#00C756",
        "name": "Fluro Green",
        "type": ["synthetic"]
      },
      {
        "pantoneId": "13-0630 TN",
        "hex": "#EDFF00",
        "name": "Fluro Yellow",
        "type": ["synthetic"]
      },
      {
        "pantoneId": "15-1360 TN",
        "hex": "#FF6D2B",
        "name": "Fluro Orange",
        "type": ["synthetic"]
      },
    ]
  },
  getters: {
    getSelectedColor(state) {
      return state.selectedColors
    }
  },
  mutations: {
    updateSelectedColor(state, payload) {
      state.selectedColors = payload
    }
  }
})

export default store;