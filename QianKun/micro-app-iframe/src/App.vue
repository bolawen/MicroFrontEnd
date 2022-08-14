<template>
  <div class="micro-app-iframe">
    <h3>Micro-App-Iframe 微应用</h3>
    <iframe
      ref="iframeRef"
      :src="iframeUrl"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      vspace="0"
      hspace="0"
      allowtransparency="true"
      allowfullscreen="true"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import state from "./store";

const { iframeUrl } = state;
</script>

<style scoped>
.micro-app-iframe {
  width: 100%;
  height: 100%;
}
.micro-app-iframe > iframe{
  width:100%;
  height:100%;
}
</style>
