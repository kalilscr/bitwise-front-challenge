<script setup lang="ts">
import FooterComponent from '../components/FooterComponent.vue'
import { useGithubStore, useGithubReposStore } from '../stores/github'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const githubStore = useGithubStore()
const reposStore = useGithubReposStore()
const router = useRouter()

onMounted(() => {
  if (!githubStore.user) {
    router.push('/')
  }
  if (!reposStore.repos) {
    router.push('/')
  }
})

const handleNewSearch = () => {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-white to-stone-100 p-8">
    <div class="max-w-6xl mx-auto">
      <div class="flex justify-between items-center mb-12">
        <img src="/src/assets/logo.png" alt="Bitwise" class="h-8" />

        <div class="flex gap-2">
          <input
            type="text"
            placeholder="Buscar usuário"
            class="shadow-lg w-96 p-2 border border-gray-200 rounded-sm focus:outline-none focus:border-fuchsia-900"
            @keyup.enter="handleNewSearch"
          />
          <button
            @click="handleNewSearch"
            class="bg-fuchsia-950 text-white px-4 py-2 shadow-lg rounded-sm hover:bg-fuchsia-900"
          >
            Buscar
          </button>
        </div>

        <div class="flex gap-4 pt-6">
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

      <div v-if="githubStore.user" class="bg-white rounded-sm shadow-lg p-8">
        <div class="flex gap-8 mb-8">
          <img
            :src="githubStore.user.avatar_url"
            :alt="githubStore.user.name"
            class="w-24 h-24 rounded-sm"
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
            <tr v-for="(repo, i) of reposStore.repos" :key="i" class="border-t">
              <td class="p-4">{{ repo.name }}</td>
              <td class="p-4">{{ repo.qtdCommits }}</td>
              <td class="p-4">{{ repo.message }}</td>
              <td class="p-4">{{ repo.hash }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>
