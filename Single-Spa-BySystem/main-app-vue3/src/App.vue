<template>
  <div>Main-App-Vue3 基座Demo</div>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/content">内容</router-link>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { AppProps } from "single-spa";
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
  name: "App",
  props: {
    base: String,
    mode: String,
    name: String,
    mountParcel: Function as PropType<AppProps["mountParcel"]>,
    singleSpa: Object as PropType<AppProps["singleSpa"]>,
  },
  setup(props) {
    console.log("Main-App-Vue3 Props", props);
  },
});
</script>

<style scoped></style>
