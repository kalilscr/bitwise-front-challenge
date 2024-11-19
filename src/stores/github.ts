import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useAlertStore } from './alert'

interface GithubUser {
  login: string
  avatar_url: string
  public_repos: number
  name: string
}

export const useGithubStore = defineStore('github', () => {
  const user = ref<GithubUser | null>(null)
  const loading = ref(false)

  async function searchUser(username: string) {
    const alertStore = useAlertStore()
    loading.value = true
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`)
      user.value = response.data
    } catch (error) {
      user.value = null
      alertStore.showAlert('Nenhum usuário encontrado!')
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    loading,
    searchUser
  }
})
