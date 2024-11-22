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

interface GithubRepos {
  name: string
  qtdCommits: string
  message: string
  hash: string
}

export const useGithubStore = defineStore('github', () => {
  const user = ref<GithubUser | null>(null)

  async function searchUser(username: string) {
    const alertStore = useAlertStore()

    const headers = {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    }

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`, {
        headers: headers,
      })

      user.value = response.data
    } catch (error) {
      user.value = null
      alertStore.showAlert('Nenhum usuário encontrado!')
      console.error(error)
    }
  }

  return {
    user,
    searchUser,
  }
})

export const useGithubReposStore = defineStore('repositories', () => {
  const repos = ref<GithubRepos[] | null>(null)

  async function searchRepos(username: string) {
    const alertStore = useAlertStore()

    const headers = {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    }

    try {
      const repositories = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}&sort=updated&per_page=10`,
        {
          headers: headers,
        },
      )

      const repoNames = repositories.data.items.map((item) => item.name)
      //const totalPublicRepos = repositories.data.total_count

      const repositoriesStats = []

      //refactor this to use promise all for better performance
      for (const repoName of repoNames) {
        const repositoriesData = await axios.get(
          `https://api.github.com/repos/${username}/${repoName}/commits?per_page=1&page=1`,
          {
            headers: headers,
          },
        )

        const commitsCountPerRepo = repositoriesData.headers.link.split(',')[1].split(/[=\>]/)[2] // catch second element of first split and then split between = and > and catch the third element

        const result = repositoriesData.data.map((item) => {
          const message = item.commit.message
          const hash = item.sha
          return { hash: hash, message: message }
        })

        const data = result.reduce((acc, curr) => {
          acc = {
            hash: curr.hash,
            message: curr.message,
          }
          return acc
        }, {})

        repositoriesStats.push({
          name: repoName,
          qtdCommits: commitsCountPerRepo,
          hash: data.hash,
          message: data.message,
        })
      }

      repos.value = repositoriesStats
    } catch (error) {
      repos.value = null
      alertStore.showAlert('Nenhum repositório do usuário foi encontrado!')
      console.error(error)
    }
  }

  return {
    repos,
    searchRepos,
  }
})
