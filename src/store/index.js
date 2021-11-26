import { createStore } from 'vuex'

export default createStore({
  state: {
    dateValue: []
    ,
    dateTo: "",
    cityFrom: "",
    cityTo: "",
    searchValue: [],
    AnotherTickets:[]
  },
  mutations: {
    getDatefrom(state, val) {
      state.dateFrom.push(val)
      // console.log(state.dateFrom)
    },
    getCityFrom(state, val) {
      state.cityFrom = val
      //  console.log(state.cityFrom)
    },
    getCityTo(state, val) {
      state.cityTo = val
    }
    , getSearch(state, val) {
      state.searchValue.push(val)
      console.log(state.searchValue)
    }
  },
  actions: {
    setCityFrom(e) {
      e.commit("setCityFrom")
    }
  },
  modules: {
  }
})
