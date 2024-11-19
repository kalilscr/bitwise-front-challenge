import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAlertStore = defineStore('alert', () => {
  const isVisible = ref(false)
  const message = ref('')

  function showAlert(msg: string) {
    message.value = msg
    isVisible.value = true
  }

  function hideAlert() {
    isVisible.value = false
  }

  return {
    isVisible,
    message,
    showAlert,
    hideAlert
  }
})
