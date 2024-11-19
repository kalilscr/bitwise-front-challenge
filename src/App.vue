<script setup lang="ts">
import { RouterView } from 'vue-router'
import AlertComponent from './components/AlertComponent.vue'
</script>

<template>
  <AlertComponent />
  <RouterView />
</template>

<style>
@import './style.css';
</style>
