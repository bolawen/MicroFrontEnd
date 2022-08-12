<template>
  <button @click="onClick('micro-app-vue3')">切换 micro-app-vue3 微应用</button>
  <button @click="onClick('micro-app-react')">切换 micro-app-react 微应用</button>
  <component :is="components.get(compName)"></component>
</template>

<script lang="ts" setup>
import loadMicro from "./loadMicro";
import { defineAsyncComponent, ref } from "vue";

const components = ref(new Map<string, any>());
components.value.set(
  "micro-app-vue3",
  defineAsyncComponent(loadMicro("micro-app-vue3"))
);
components.value.set(
  "micro-app-react",
  defineAsyncComponent(loadMicro("micro-app-react"))
);

const compName = ref();

function onClick(microName) {
  compName.value = microName;
}
</script>

<style scoped></style>
