<template>
  <header class="bg-white dark:bg-gray-800">
    <nav class="bg-white dark:bg-gray-800">
      <div class="container p-6 mx-auto">
        <a
          class="
            block
            text-2xl
            font-bold
            text-center text-gray-800
            dark:text-white
            lg:text-3xl
            hover:text-gray-700
            dark:hover:text-gray-300
          "
          href="#"
          >BPO</a
        >
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
