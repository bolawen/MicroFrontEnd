<template>
  <h3>Micro-App-Vue3</h3>
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
