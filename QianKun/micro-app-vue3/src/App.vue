<template>
  <div>
    <h3>Micro-App-Vue3 微应用</h3>
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
