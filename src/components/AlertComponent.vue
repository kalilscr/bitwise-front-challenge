<script setup lang="ts">
import { useAlertStore } from '../stores/alert'

const alertStore = useAlertStore()
</script>

<template>
  <div v-if="alertStore.isVisible"
       class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
    <div class="bg-purple-800 text-white p-4 rounded-lg shadow-lg">
      <div class="flex justify-between items-center">
        <p>{{ alertStore.message }}</p>
        <button @click="alertStore.hideAlert" class="text-white hover:text-gray-200">
          <span class="text-xl">×</span>
        </button>
      </div>
      <div class="mt-2 text-sm">
        <p>Enquanto isso, acompanhe a Bitwise nas redes sociais:</p>
        <div class="flex gap-2 mt-1">
          <a href="#" class="text-gray-600 hover:text-purple-800"><img src="/src/assets/medium.png" alt="M" class="h-6 mb-6" /></a>
          <a href="#" class="text-gray-600 hover:text-purple-800"><img src="/src/assets/linkedin.png" alt="in" class="h-6 mb-6" /></a>
          <a href="#" class="text-gray-600 hover:text-purple-800"><img src="/src/assets/instagram.png" alt="ig" class="h-6 mb-6" /></a>
        </div>
      </div>
    </div>
  </div>
</template>
