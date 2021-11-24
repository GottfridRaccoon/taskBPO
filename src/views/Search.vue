<template>
  <div class="items-center w-full flex-grow">
    <div class="search w-3/5 m-auto">
      <SearchInput title="From"></SearchInput>
      <SearchInput title="To"></SearchInput>
      <litepie-datepicker
        use-range
        :shortcuts="false"
        v-model="dateValue"
        @click="g"
        :formatter="formatter"
      ></litepie-datepicker>

      <router-link to="/result">
        <button
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

import SearchInput from "../components/SearchInput.vue";
export default {
  name: "Search",
  components: {
    LitepieDatepicker,

    SearchInput,
  },
  setup() {
    const dateValue = ref([]);
    const formatter = ref({
      date: "DD MMM YYYY",
      month: "MMM",
    });
    // let g = () => console.log(dateValue);

    return {
      dateValue,
      formatter,
    };
  },
};
</script>
