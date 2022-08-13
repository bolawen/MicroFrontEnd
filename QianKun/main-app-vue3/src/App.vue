<template>
  <div>
    <h3>Main-App-Vue3 基座</h3>
    <div>
      <button @click="handleChangeMicro('micro-app-vue3')">
        micro-app-vue3 微应用
      </button>
      <button @click="handleChangeMicro('micro-app-vue3')">
        micro-app-react 主应用
      </button>
    </div>
    <div ref="microAppParentContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

const microAppParentContainer = ref(null);

function handleChangeMicro(microApp: string) {
  const microAppContainer = document.createElement("div");
  microAppContainer.id = microApp;
  microAppParentContainer.value.append(microAppContainer);

  nextTick(() => {
    const globalState = {
      name: microApp,
      operation: "mount",
    };
    window.actions.setGlobalState(globalState);
  });
}
</script>
<style scoped></style>
