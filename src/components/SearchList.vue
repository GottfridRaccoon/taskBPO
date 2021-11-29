<template>
  <ul
    v-if="reference.length"
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
      Showing {{ reference.length }} of {{ cities.length }} results
    </li>
    <li
      v-for="city in reference"
      :key="city.name"
      @click="storeList"
      class="cursor-pointer hover:bg-gray-100 p-1"
    >
      <!-- v-on:click="changeCity" -->

      {{ city.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "SearchList",
  props: {
    reference: Function,
    storeList: Function,
  },
};
</script>

<style>
</style>