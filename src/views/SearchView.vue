<script setup lang="ts">
import { useGithubStore } from '../stores/github'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const githubStore = useGithubStore()
const router = useRouter()

onMounted(() => {
  if (!githubStore.user) {
    router.push('/')
  }
})

const handleNewSearch = () => {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-white p-8">
    <div class="max-w-6xl mx-auto">
      <div class="flex justify-between items-center mb-12">
        <img src="/src/assets/logo.png" alt="Bitwise" class="h-8" />

        <div class="flex items-center gap-8">
          <div class="flex gap-2">
            <input
              type="text"
              placeholder="Buscar usuário"
              class="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-800"
              @keyup.enter="handleNewSearch"
            />
            <button
              @click="handleNewSearch"
              class="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-900"
            >
              Buscar
            </button>
          </div>

          <div class="flex gap-4">
            <a href="#" class="text-gray-600 hover:text-purple-800"><img src="/src/assets/medium.png" alt="M" class="h-6 mb-6" /></a>
            <a href="#" class="text-gray-600 hover:text-purple-800"><img src="/src/assets/linkedin.png" alt="in" class="h-6 mb-6" /></a>
            <a href="#" class="text-gray-600 hover:text-purple-800"><img src="/src/assets/instagram.png" alt="ig" class="h-6 mb-6" /></a>
          </div>
        </div>
      </div>

      <div v-if="githubStore.user" class="bg-white rounded-lg shadow-lg p-8">
        <div class="flex gap-8 mb-8">
          <img
            :src="githubStore.user.avatar_url"
            :alt="githubStore.user.name"
            class="w-24 h-24 rounded-full"
          />
          <div>
            <h2 class="text-2xl font-bold">{{ githubStore.user.name }}</h2>
            <p class="text-gray-600">{{ githubStore.user.public_repos }} repositórios</p>
          </div>
        </div>

        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="text-left p-4">Nome do repositório</th>
              <th class="text-left p-4">Qtd de commit</th>
              <th class="text-left p-4">Msg último commit</th>
              <th class="text-left p-4">hash do último commit</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t">
              <td class="p-4">Data 01</td>
              <td class="p-4">Data 02</td>
              <td class="p-4">Data 03</td>
              <td class="p-4">Data 04</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
