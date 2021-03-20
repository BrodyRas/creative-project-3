<template>
  <div class="home">
    <h1>Emotion Logs</h1>
    <p><i>Used to track how you're feeling throughout the day</i></p>
    <div id="log-form">
      <h2>Create a new log!</h2>
      <input type="text" placeholder="Title" v-model="logTitle" /> <br />
      <textarea placeholder="Message" v-model="logBody"></textarea><br />
      <h3><i>I'm feeling...</i></h3>
      <input
        type="checkbox"
        name="favorite1"
        value="happy"
        v-model="checkedTags"
      />
      Happy
      <input
        type="checkbox"
        name="favorite2"
        value="sad"
        v-model="checkedTags"
      />
      Sad
      <br />
      <input
        type="checkbox"
        name="favorite3"
        value="anxious"
        v-model="checkedTags"
      />
      Anxious
      <input
        type="checkbox"
        name="favorite4"
        value="determined"
        v-model="checkedTags"
      />
      Determined
      <br />
      <input
        type="checkbox"
        name="favorite5"
        value="overwhelmed"
        v-model="checkedTags"
      />
      Overwhelmed
      <input
        type="checkbox"
        name="favorite6"
        value="conflicted"
        v-model="checkedTags"
      />
      Conflicted
      <br />
      <input
        type="checkbox"
        name="favorite7"
        value="energetic"
        v-model="checkedTags"
      />
      Energetic
      <input
        type="checkbox"
        name="favorite8"
        value="lethargic"
        v-model="checkedTags"
      />
      Lethargic
      <br />
      <input
        type="checkbox"
        name="favorite9"
        value="full"
        v-model="checkedTags"
      />
      Full
      <input
        type="checkbox"
        name="favorite10"
        value="empty"
        v-model="checkedTags"
      />
      Empty <br /><br />
      <button v-on:click="addLog">Log!</button>
    </div>

    <LogControl :logs="logs"></LogControl>
  </div>
</template>

<script>
import LogControl from "../components/LogControl.vue";

export default {
  name: "Home",
  components: {
    LogControl,
  },
  data() {
    return {
      logTitle: "",
      logBody: "",
      checkedTags: [],
    };
  },
  methods: {
    addLog() {
      //Only add if the title and body are not empty. Empty tags are allowed
      if (this.logTitle.length > 0 && this.logBody.length > 0) {
        //Create new log object
        let newLog = {
          body: this.logBody,
          index: this.$root.$data.logs.length,
          tags: this.checkedTags,
          title: this.logTitle,
          written: new Date(),
        };

        //Clear the form
        this.logBody = "";
        this.logTitle = "";
        this.checkedTags = [];

        //Push new object to list
        this.$root.$data.logs.push(newLog);
      }
    },
  },
  computed: {
    logs() {
      return this.$root.$data.logs;
    },
  },
};
</script>

<style scoped>
#log-form {
  background-color: pink;
  padding: 30px;
  border-radius: 30px;
}
</style>