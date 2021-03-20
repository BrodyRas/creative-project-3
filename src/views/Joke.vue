<template>
  <div class="joke">
    <h1 style="text-align: center">Joke Central!</h1>
    <p style="text-align: center"><i>Lighten your mood!</i></p>
    <p>
      Everyone knows a good laugh is critical to maintaining one's mental
      health. We hope to bring some levity to your daily life through our simple
      joke app. You'll see the setup for a two-part joke down below. Click the
      button to reveal the punchline! This will reveal another button, letting
      you begin on a new joke. Try it out!
    </p>
    <div class="joke-container">
      <p>{{ setup }}</p>
      <button v-on:click="punch">Punchline please!</button>
      <p>{{ punchline }}</p>
      <button v-on:click="reset" v-if="punchline.length > 0">Haha! Another!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Joke",
  data() {
    return {
      index: 0,
      setup: ".NET developers are picky when it comes to food.",
      punchline: "",
    };
  },
  methods: {
    punch() {
      this.punchline = this.$root.$data.jokes[this.index].delivery;
    },
    reset() {
      this.index = Math.floor(Math.random() * this.$root.$data.jokes.length);
      this.setup = this.$root.$data.jokes[this.index].setup;
      this.punchline = "";
    },
  },
  components: {},
};
</script>

<style scoped>
.joke-container{
  background-color: rgb(191, 236, 191);
  padding: 20px;
  border: 3px solid rgb(100, 28, 40);
  border-radius: 20px;
}
</style>