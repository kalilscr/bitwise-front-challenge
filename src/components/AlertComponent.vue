<script setup lang="ts">
import { useAlertStore } from '../stores/alert'

const alertStore = useAlertStore()
</script>

<template>
  <div
    v-if="alertStore.isVisible"
    class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-lg"
  >
    <div
      class="bg-gradient-to-r from-fuchsia-900 to-fuchsia-800 text-white pl-6 pb-4 rounded-xl shadow-lg"
    >
      <div class="flex justify-end">
        <button @click="alertStore.hideAlert" class="text-white hover:text-gray-200">
          <span class="text-2xl mr-2">×</span>
        </button>
      </div>
      <p class="text-2xl mb-5">{{ alertStore.message }}</p>
      <div class="mt-2 text-xs">
        <div class="flex gap-2">
          <p>Enquanto isso, acompanhe a Bitwise nas redes sociais:</p>
          <a href="#" class="text-gray-600 hover:text-fuchsia-950"
            ><img src="/src/assets/medium.png" alt="M" class="h-4 mb-4"
          /></a>
          <a href="#" class="text-gray-600 hover:text-fuchsia-950"
            ><img src="/src/assets/linkedin.png" alt="in" class="h-4 mb-4"
          /></a>
          <a href="#" class="text-gray-600 hover:text-fuchsia-950"
            ><img src="/src/assets/instagram.png" alt="ig" class="h-4 mb-4"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
