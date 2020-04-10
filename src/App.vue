<template>
  <div>
    <h2>app</h2>
    <router-link to="/home">home</router-link>
    <router-link to="/page1">page1</router-link>
    <router-link to="/page2">page2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="less"></style>
