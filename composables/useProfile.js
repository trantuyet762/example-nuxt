// src/composables/useProfile.js
import { ref, reactive } from 'vue'
import axios from 'axios'

export function useProfile() {
  const profile = reactive({
    name: '',
    bio: '',
    description: '',
    backgroundImageUrl: '',
    avatarUrl: '',
    images: [],
    unions: [],
    twitter: '',
    instagram: '',
    facebook: '',
    discord: '',
  })

  const userProfile = ref(null)
  const userProfileLoading = ref(false)

  const isLoading = ref(false)
  const error = ref(null)

  const fetchProfile = async () => {
    isLoading.value = true
    error.value = null
    try {
      const response = await axios.get(`${apiBaseUrl}/api/profile`, {
        withCredentials: true,
      })
      Object.assign(profile, response.data)
    } catch (err) {
      console.error('Error fetching profile:', err)
      error.value = 'Failed to load profile'
    } finally {
      isLoading.value = false
    }
  }

  const updateProfile = async (updatedData) => {
    isLoading.value = true
    error.value = null
    try {
      const formData = new FormData()

      // Append text fields
      for (const [key, value] of Object.entries(updatedData)) {
        if (key !== 'avatarPreview' && key !== 'backgroundPreview') {
          formData.append(key, value)
        }
      }

      // Append avatar image if it exists
      if (updatedData.avatarPreview) {
        const avatarBlob = await axios.get(updatedData.avatarPreview, {
          responseType: 'blob',
        })
        formData.append('avatar', avatarBlob.data, 'avatar.png')
      }

      // Append background image if it exists
      if (updatedData.backgroundPreview) {
        const backgroundBlob = await axios.get(updatedData.backgroundPreview, {
          responseType: 'blob',
        })
        formData.append('background', backgroundBlob.data, 'background.png')
      }

      const response = await axios.put(`${apiBaseUrl}/api/profile`, formData, {
        withCredentials: true,
      })
      Object.assign(profile, response.data)
    } catch (err) {
      console.error('Error updating profile:', err)
      error.value = 'Failed to update profile'
    } finally {
      isLoading.value = false
    }
  }

  // Fetch specific user's profile by userId
  const fetchUserProfile = async (userId) => {
    userProfileLoading.value = true
    error.value = null
    try {
      const response = await axios.get(`${apiBaseUrl}/api/profile/${userId}`, {
        withCredentials: true,
      })
      userProfile.value = response.data
    } catch (err) {
      console.error('Error fetching user profile:', err)
      error.value = 'Failed to load user profile'
    } finally {
      userProfileLoading.value = false
    }
  }

  return {
    profile,
    userProfile,
    isLoading,
    error,
    fetchProfile,
    fetchUserProfile,
    updateProfile,
    userProfileLoading,
  }
}
