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
    // todo: refactor this
    if (githubStore.user && !githubStore.user.public_repos) {
      await reposStore.searchRepos(username.value)
      router.push('/search')
    }
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-white to-stone-100 p-8">
    <div class="max-w-4xl mx-auto">
      <img src="/src/assets/logo.png" alt="Bitwise" class="h-12 mb-12" />

      <div class="mb-12">
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
          class="bg-fuchsia-950 text-white px-4 py-2 shadow-lg rounded-sm hover:bg-fuchsia-900"
        >
          Buscar
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
