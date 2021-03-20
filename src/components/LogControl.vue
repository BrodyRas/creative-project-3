<template>
  <div>
    <div v-for="log in logs.slice().reverse()" :key="log.index">
      <LogCard :log="log"></LogCard>
    </div>
  </div>
</template>

<script>
import LogCard from "./LogCard.vue";

export default {
  name: "LogControl",
  props: {
    logs: Array,
  },
  components: {
    LogCard,
  },
};
</script>

<style>
</style>