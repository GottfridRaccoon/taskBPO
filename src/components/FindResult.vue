<template>
  <div class="mb-14">
    <ul id="v-for-object" class="flex">
      <li
        v-for="value in searchValue"
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
    searchValue: ({ searchValue }) => searchValue,
  }),
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