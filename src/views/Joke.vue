<template>
  <div class="joke">
    <p>{{setup}}</p>
    <button v-on:click="punch">Punchline!</button>
    <p>{{punchline}}</p>
    <button v-on:click="reset" v-if="punchline.length > 0">Another!</button>
  </div>
</template>

<script>

export default {
  name: 'Joke',
  data(){
    return {
      index: 0,
      setup: ".NET developers are picky when it comes to food.",
      punchline: ""
    }
  },
  methods: {
    punch(){
      this.punchline = this.$root.$data.jokes[this.index].delivery;
    },
    reset(){
      this.index = Math.floor(Math.random() * this.$root.$data.jokes.length);
      this.setup = this.$root.$data.jokes[this.index].setup
      this.punchline = ""
    }
  },
  components: {

  }
}
</script>
