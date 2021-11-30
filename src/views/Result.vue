<template>
  <div class="m-16">
    <h1 class="text-xl mb-5">Search Data:</h1>
    <h3>Departure City:{{ $store.state.cityFrom }}</h3>
    <h3>Arrival City: {{ $store.state.cityTo }}</h3>
    <h3>Departure Date: {{ $store.state.dateValue[0] }}</h3>
    <h3>Arriva Date: {{ $store.state.dateValue[1] }}</h3>
  </div>
  <div class="ml-16">
    <h1 class="text-xl mb-5">Result</h1>
    <FindResult></FindResult>

    <!-- <h1 class="text-xl mb-5">Another tickets</h1> -->
    <!-- <AnotherTickets></AnotherTickets> -->

    <router-link to="/">
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
        To search
      </button></router-link
    >

  </div>
</template>

<script>
// @ is an alias to /src
import FindResult from "../components/FindResult";

export default {
  name: "Result",
  components: {
    FindResult,
  },
};
</script>