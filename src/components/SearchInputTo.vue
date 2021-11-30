<template>
  <div class="relative">
    <label for="search" class="text-gray">
      {{ title }}
    </label>

    <input
      type="text"
      id="search"
      v-model="searchTerm"
      @change="storeUpdate"
      class="
        shadow
        appearance-none
        border
        rounded
        w-full
        py-2
        px-1
        text-gray-700
        leading-tight
        focus:outline-none focus:shadow-outline
        mb-5
        mt-5
      "
    />

    <ul
      v-if="searchCities.length"
      v-show="isShow"
      class="
        w-full
        rounded
        bg-white
        border border-gray-300
        px-4
        py-2
        space-y-1
        absolute
        z-10
      "
    >
      <li class="px-1 pt-1 pb-2 font-bold border-b border-gray-200">
        Showing {{ searchCities.length }} of {{ cities.length }} results
      </li>
      <li
        v-for="city in searchCities"
        :key="city.name"
        @click="storeList"
        class="cursor-pointer hover:bg-gray-100 p-1"
      >
        <!-- v-on:click="changeCity" -->

        {{ city.name }}
      </li>
    </ul>
  </div>

  <h1>{{ $store.state.cityTo }}</h1>
</template>

<script>
import cities from "../data/cities.json";
import { ref, computed } from "vue";
export default {
  name: "SearchInput",
  methods: {
    storeUpdate(e) {
      this.$store.commit("getCityTo", e.target.value);
      this.isShow = true;
    },
    storeList(e) {
      this.$store.commit("getCityTo", e.target.innerText);
      this.isShow = false;
    },
  },
  props: {
    title: String,
    vuexValue: String,
  },
  data() {
    return {
      isShow: true,
    };
  },
  setup() {
    let searchTerm = ref("");
    const searchCities = computed(() => {
      if (searchTerm.value === "") {
        return [];
      }
      let matches = 0;
      return cities.filter((city) => {
        if (
          city.name.toLowerCase().includes(searchTerm.value.toLowerCase()) &&
          matches < 10
        ) {
          matches++;
          return city;
        }
      });
    });
    const selectCity = (city) => {
      searchTerm.value = city;
    };
    return {
      cities,
      searchTerm,
      searchCities,
      selectCity,
    };
  },
};
</script>