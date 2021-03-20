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
      <p><i>Written on {{Date.parse(log.written)}}</i></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogCard",
  props: {
    log: Object,
  },
  methods: {},
};
</script>

<style scoped>
.log-card {
  background-color: #eee;
  /* border: 1px solid #f00; */
  border-radius: 20px;
  padding: 20px;
  margin-top: 10px;
}

.feeling-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
}
</style>