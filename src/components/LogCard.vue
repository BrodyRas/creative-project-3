<template>
  <div>
    <div class="log-card">
      <div>
        <h3>{{ log.title }}</h3>
        <p>{{ log.body }}</p>
      </div>
      <div class="feeling-card" v-if="log.tags.length > 0">
        <h4><i>I'm feeling...</i></h4>
        <ul id="v-for-object" class="demo">
          <li v-for="tag in log.tags" :key="tag">
            {{ tag }}
          </li>
        </ul>
      </div>
      <div class="bottom-row">
        <p>
          <i>Written on {{ readableDate }}</i>
        </p>
        <button v-on:click="deleteLog">Delete?</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogCard",
  props: {
    log: Object,
  },
  methods: {
    deleteLog(){
      let index = this.$root.$data.logs.indexOf(this.log);
      this.$root.$data.logs.splice(index, 1);
    }
  },
  computed: {
    readableDate() {
      let a = new Date(this.log.written);
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let year = a.getFullYear();
      let month = months[a.getMonth()];
      let date = a.getDate();
      let hour = a.getHours();
      let min = a.getMinutes();
      let time = date + " " + month + " " + year + " " + hour + ":" + min;
      return time;
    },
  },
};
</script>

<style scoped>
.log-card {
  background-color: rgb(243, 227, 227);
  border: 3px solid rgb(129, 57, 69);
  border-radius: 20px;
  padding: 20px;
  margin-top: 10px;
}

.feeling-card {
  background-color: rgb(248, 240, 240);
  border-radius: 10px;
  padding: 10px;
}

.bottom-row{
  display: flex;
  justify-content: space-between;
}

.bottom-row button {
  background-color: rgb(129, 57, 69);
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  margin-top: 5px;
  transition: all 0.3s;
}

.bottom-row button:hover{
  font-size: 1.05em;
}
</style>