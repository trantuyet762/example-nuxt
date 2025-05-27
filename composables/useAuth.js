import { ref, computed } from 'vue'
import axios from 'axios'

export function useAuth(store) {
  const error = ref(null)
  const loading = ref(false)

  const user = computed(() => store?.state?.user ?? null)
  const isAuthenticated = computed(() => !!user.value)

  async function login(email, password) {
    loading.value = true
    error.value = null
    try {
      const response = await axios.post(
        `${apiBaseUrl}/api/login`,
        { email, password },
        { withCredentials: true }
      )
      if (response.data.user) {
        store.dispatch('setUser', response.data.user)
        loading.value = false
        return true
      }
    } catch (err) {
      error.value =
        err.response?.data?.error || 'An error occurred during login'
    }
    loading.value = false
    return false
  }

  function loginWithTwitter() {
    window.location.href = `${apiBaseUrl}/auth/twitter`
  }

  async function logout() {
    loading.value = true
    error.value = null
    try {
      await axios.post(
        `${apiBaseUrl}/api/logout`,
        {},
        { withCredentials: true }
      )
      store.dispatch('setUser', null)
      loading.value = false
      return true
    } catch (err) {
      error.value = 'An error occurred during logout'
      loading.value = false
      return false
    }
  }

  async function checkAuth() {
    loading.value = true
    error.value = null
    try {
      const response = await axios.get(`${apiBaseUrl}/api/profile`, {
        withCredentials: true,
      })
      store.dispatch('setUser', response.data)
      loading.value = false
      return true
    } catch (err) {
      store.dispatch('setUser', null)
      loading.value = false
      return false
    }
  }

  return {
    user,
    isAuthenticated,
    error,
    loading,
    login,
    loginWithTwitter,
    logout,
    checkAuth,
  }
}
