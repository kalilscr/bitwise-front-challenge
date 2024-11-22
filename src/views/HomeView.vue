<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useGithubStore, useGithubReposStore } from '../stores/github'

const router = useRouter()
const githubStore = useGithubStore()
const reposStore = useGithubReposStore()
const username = ref('')
const isLoading = ref(false)

const handleSearch = async () => {
  if (username.value) {
    isLoading.value = true

    await githubStore.searchUser(username.value)

    isLoading.value = false
    if (githubStore.user) {
      isLoading.value = true

      await reposStore.searchRepos(username.value)
      router.push('/search')

      isLoading.value = false
    }
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-white to-stone-100 p-8">
    <div class="max-w-4xl mx-auto">
      <img src="/src/assets/logo.png" alt="Bitwise" class="h-12 mb-12" />

      <div class="mb-20 mt-24">
        <h1 class="text-4xl text-fuchsia-950 mb-2">
          Buscar um usuário no <span class="font-bold text-fuchsia-950">Github</span>
        </h1>
        <p class="text-4xl text-fuchsia-950">
          ficou muito <span class="font-bold text-fuchsia-950">fácil!</span>
        </p>
      </div>

      <div class="flex gap-2">
        <input
          v-model="username"
          type="text"
          placeholder="Buscar usuário"
          class="shadow-lg max-w-md flex-1 p-2 border border-gray-200 rounded-sm focus:outline-none focus:border-fuchsia-900"
          @keyup.enter="handleSearch"
        />
        <button
          @click="handleSearch"
          class="bg-fuchsia-950 text-white px-4 py-2 shadow-lg rounded-sm hover:bg-fuchsia-900 flex items-center"
          :disabled="isLoading"
        >
          <template v-if="isLoading">
            <svg
              class="animate-spin h-6 w-8 mx-1.5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </template>
          <template v-else> Buscar </template>
        </button>
      </div>

      <div
        class="flex gap-4 mt-12 fixed bottom-0 left-0 z-20 w-full p-4 md:flex md:items-center md:justify-center md:p-6"
      >
        <a href="#" class="text-gray-600 hover:text-fuchsia-900"
          ><img src="/src/assets/medium.png" alt="M" class="h-6 mb-6"
        /></a>
        <a href="#" class="text-gray-600 hover:text-fuchsia-900"
          ><img src="/src/assets/linkedin.png" alt="in" class="h-6 mb-6"
        /></a>
        <a href="#" class="text-gray-600 hover:text-fuchsia-900"
          ><img src="/src/assets/instagram.png" alt="ig" class="h-6 mb-6"
        /></a>
      </div>
    </div>
  </div>
</template>
