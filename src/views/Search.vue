<template>
  <div class="items-center w-full flex-grow">
    <div class="search w-3/5 m-auto">
      <SearchInputFrom title="From"></SearchInputFrom>
      <SearchInputTo title="To"></SearchInputTo>

      <litepie-datepicker
        use-range
        :shortcuts="false"
        v-model="$store.state.dateValue"
        :formatter="formatter"
      ></litepie-datepicker>

      <router-link to="/result">
        <button
          v-on:click="getTickets"
          class="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            db
            mt-6
          "
        >
          Button
        </button></router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import LitepieDatepicker from "litepie-datepicker";

import SearchInputFrom from "../components/SearchInputFrom.vue";
import SearchInputTo from "../components/SearcInputTo.vue";
import tickets from "../data/tickets.json";
export default {
  name: "Search",
  components: {
    LitepieDatepicker,
    SearchInputTo,
    SearchInputFrom,
  },

  methods: {
    getTickets() {
      tickets.filter((e) => {
        if (
          e.DepartureCity === this.$store.state.cityFrom &&
          e.ArrivalCity === this.$store.state.cityTo &&
          e.DepatureDate === this.$store.state.dateValue[0] &&
          e.ArrivaDate === this.$store.state.dateValue[1]
        ) {
          this.$store.commit("getSearch", e);
        }
      });
      // console.log(findTickets);
    },
  },
  setup() {
    const formatter = ref({
      date: "DD MMM YYYY",
      month: "MMM",
    });
    // let g = () => console.log(dateValue);

    return {
      formatter,
    };
  },
};
</script>
