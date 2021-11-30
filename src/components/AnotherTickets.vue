<template>
  <div class="flex">
    <div v-for="value in tick" :key="value.DepatureDate" class="mr-5 flex">
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
    </div>
  </div>
</template>

<script>
import tickets from "../data/tickets.json";
export default {
  name: "AnoterTickets",
  data() {
    return {
      tick: tickets,
    };
  },
};
</script>

<style>
</style>