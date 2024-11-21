<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useGithubStore, useGithubReposStore } from '../stores/github'

const router = useRouter()
const githubStore = useGithubStore()
const reposStore = useGithubReposStore()
const username = ref('')

const handleSearch = async () => {
  if (username.value) {
    await githubStore.searchUser(username.value)
    await reposStore.searchRepos(username.value)
    if (githubStore.user && reposStore.repos) {
      router.push('/search')
    }
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-white to-purple-100 p-8">
    <div class="max-w-4xl mx-auto">
      <img src="/src/assets/logo.png" alt="Bitwise" class="h-12 mb-12" />

      <div class="mb-12">
        <h1 class="text-4xl font-bold mb-2">
          Buscar um usuário no <span class="text-purple-800">Github</span>
        </h1>
        <p class="text-2xl">ficou muito <span class="text-purple-800">fácil!</span></p>
      </div>

      <div class="flex gap-2">
        <input
          v-model="username"
          type="text"
          placeholder="Buscar usuário"
          class="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-800"
          @keyup.enter="handleSearch"
        />
        <button
          @click="handleSearch"
          class="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-900"
        >
          Buscar
        </button>
      </div>

      <div
        class="flex gap-4 mt-12 fixed bottom-0 left-0 z-20 w-full p-4 md:flex md:items-center md:justify-center md:p-6"
      >
        <a href="#" class="text-gray-600 hover:text-purple-800"
          ><img src="/src/assets/medium.png" alt="M" class="h-6 mb-6"
        /></a>
        <a href="#" class="text-gray-600 hover:text-purple-800"
          ><img src="/src/assets/linkedin.png" alt="in" class="h-6 mb-6"
        /></a>
        <a href="#" class="text-gray-600 hover:text-purple-800"
          ><img src="/src/assets/instagram.png" alt="ig" class="h-6 mb-6"
        /></a>
      </div>
    </div>
  </div>
</template>
