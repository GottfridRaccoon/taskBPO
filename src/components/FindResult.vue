<template>
  <div class="mb-14">
    <h1 v-if="$store.state.searchValue.length === 0" class="text-2xl mb-5">
      No results
    </h1>
    <p>Sort By</p>
    <select>
      <option @click="decrasePrice()">Decrease in price</option>
      <option @click="incrasePrice()">Price increase</option>
    </select>
    <ul id="v-for-object" class="flex">
      <li
        v-for="value in searchValue.searchValue"
        :key="value.DepartureCity"
        class="
          max-w-md
          py-4
          px-8
          bg-white
          shadow-lg
          rounded-lg
          mr-5
          tickets__li
        "
      >
        <div class="mr-5">
          <p>DepartureCity: {{ value.DepartureCity }}</p>
          <p>Arrival City: {{ value.ArrivalCity }}</p>
          <p>Departure Date: {{ value.DepatureDate }}</p>
          <p>Arrival Date: {{ value.ArrivaDate }}</p>
          <p>Cost: {{ value.Cost }}</p>
          <button
            class="
              bg-blue-500
              hover:bg-blue-700
              text-white
              font-bold
              py-2
              px-4
              rounded
              mt-5
            "
          >
            Buy
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FindResult",
  computed: mapState({
    searchValue: (searchValue) => searchValue,
  }),
  methods: {
    decrasePrice() {
      this.$store.commit("decrasePrice");
      //  console.log(this.$store.state.searchValue);
    },
    incrasePrice() {
      this.$store.commit("inctracePrice");
    },
  },
  // methods: {
  //   proverka() {
  //     if (this.$store.state.searchValue.length === 0) {
  //       console.log("empty");
  //     } else {
  //       console.log("nicht");
  //     }
  //   },
  // },
};
</script>

<style>
.tickets__li:hover {
  animation-name: example;
  animation-duration: 4s;
}
@keyframes example {
  to {
    margin-left: 10px;
  }
}
</style>