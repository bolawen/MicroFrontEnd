<template>
  <div class="home">内容</div>
  <div>
    <button
      @click="handleChangeMicro('qiankun-htmlEntry-micro-app-vue3', 'qiankun')"
    >
      qiankun HTML-Entry micro-app-vue3 微应用
    </button>
    <button
      @click="handleChangeMicro('qiankun-htmlEntry-micro-app-react', 'qiankun')"
    >
      qiankun HTML-Entry micro-app-react 微应用
    </button>
    <button
      @click="handleChangeMicro('qiankun-JSEntry-micro-app-react', 'qiankun')"
    >
      qiankun JS-Entry micro-app-vue3 微应用
    </button>
    <button
      @click="
        handleChangeMicro('singleSpa-JSEntry-micro-app-react', 'single-spa')
      "
    >
      single-spa JS-Entry micro-app-react 微应用
    </button>
    <button
      @click="handleChangeMicro('iframe-JSEntry-micro-app-vue3', 'iframe')"
    >
      iframe JS-Entry micro-app-vue3 微应用
    </button>
  </div>
  <div ref="microAppParentContainer"></div>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";

const microAppParentContainer = ref();

function handleChangeMicro(microApp: string, type: string) {
  const microAppContainer = document.createElement("div");
  microAppContainer.id = microApp;
  microAppParentContainer.value.append(microAppContainer);

  const qiankunProps = {
    base: "/content",
    mode: "history",
    type,
    mountContainer: microApp,
  };

  if (type === "iframe") {
    qiankunProps.iframeUrl = "https://qiankun.umijs.org/zh";
  }

  nextTick(() => {
    const globalState = {
      name: microApp,
      operation: "mount",
      ...qiankunProps,
    };
    window.actions.setGlobalState(globalState);
  });
}
</script>
