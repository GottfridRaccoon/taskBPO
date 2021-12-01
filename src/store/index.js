import { createStore } from 'vuex'


export default createStore({
  state: {
    dateValue: []
    ,
    dateTo: "",
    cityFrom: "",
    cityTo: "",
    searchValue: [],

    AnotherTickets: []

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
      console.log("val", val)

      state.searchValue.push(val)
      console.log("searchval", state.searchValue)
      // console.log("val", val)
      // console.log("a", a)
    },
    resetSearch(state) {
      state.searchValue = []
    }
    , decrasePrice(state,) {
      let a = state.searchValue.sort((a, b) => b.Cost - a.Cost);
      state.searchValue = []
      state.searchValue.push(...a)

    },
    inctracePrice(state,) {
      let a = state.searchValue.sort((a, b) => a.Cost - b.Cost);
      state.searchValue = []
      state.searchValue.push(...a)

    },
    incraseTime(state) {
      // let times = [{ "id": 1, "date": "02:01:02" }, { "id": 2, "date": "01:01:01" }, { "id": 3, "date": "03:01:01" }, { "id": 4, "date": "04:01:01" }];
      //times.sort((a, b) => a.date.localeCompare(b.date));
      // console.log(times);
      let sort = state.searchValue.sort((a, b) => a.Time.localeCompare(b.Time))
      state.searchValue = []
      state.searchValue.push(...sort)
    },
    decraseTime(state) {
      let sortin = state.searchValue.sort((a, b) => b.Time.localeCompare(a.Time))
      state.searchValue = []
      state.searchValue.push(...sortin)
      console.log(sortin)
    },
    

  },
  actions: {
    setCityFrom(e) {
      e.commit("setCityFrom")
    }
  },
  modules: {
  }
})
