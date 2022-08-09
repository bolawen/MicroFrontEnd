<template>
  <div>Main-App-Vue3 主应用</div>
  <div>
    <router-link to="/micro-app-vue3">micro-app-vue3</router-link>
    <router-link to="/micro-app-react">micro-app-react</router-link>
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
    console.log("Main-App-Vue3 Props",props);
  },
});
</script>

<style scoped></style>
