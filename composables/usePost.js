import { ref } from 'vue'
import axios from 'axios'

export function usePost() {
  const isLoading = ref(false)
  const error = ref(null)
  const posts = ref([])
  const currentPost = ref(null)

  const createPost = async (postData) => {
    isLoading.value = true
    error.value = null

    try {
      const formData = new FormData()
      formData.append('title', postData.title)
      formData.append('content', postData.content)
      formData.append('tags', JSON.stringify(postData.tags))

      if (postData.avatar) {
        const avatarBlob = await fetch(postData.avatar).then((r) => r.blob())
        formData.append('avatar', avatarBlob, 'avatar.jpg')
      }

      if (postData.background) {
        const backgroundBlob = await fetch(postData.background).then((r) =>
          r.blob()
        )
        formData.append('background', backgroundBlob, 'background.jpg')
      }

      const response = await axios.post(`${apiBaseUrl}/api/posts`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      })

      posts.value.unshift(response.data)
      return response.data
    } catch (err) {
      error.value = err.response
        ? err.response.data.error
        : 'An error occurred while creating the post'
      throw error.value
    } finally {
      isLoading.value = false
    }
  }

  const getPosts = async () => {
    isLoading.value = true
    error.value = null

    try {
      const response = await axios.get(`${apiBaseUrl}/api/posts`, {
        withCredentials: true,
      })
      posts.value = response.data
      return posts.value
    } catch (err) {
      error.value = err.response
        ? err.response.data.error
        : 'An error occurred while fetching posts'
      throw error.value
    } finally {
      isLoading.value = false
    }
  }

  const getPostById = async (id) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await axios.get(`${apiBaseUrl}/api/posts/${id}`, {
        withCredentials: true,
      })
      currentPost.value = response.data
      return currentPost.value
    } catch (err) {
      error.value = err.response
        ? err.response.data.error
        : 'An error occurred while fetching the post'
      throw error.value
    } finally {
      isLoading.value = false
    }
  }

  const deletePost = async (id) => {
    isLoading.value = true
    error.value = null

    try {
      await axios.delete(`${apiBaseUrl}/api/posts/${id}`, {
        withCredentials: true,
      })
      posts.value = posts.value.filter((post) => post.id !== id)
    } catch (err) {
      error.value = err.response
        ? err.response.data.error
        : 'An error occurred while deleting the post'
      throw error.value
    } finally {
      isLoading.value = false
    }
  }

  const updatePost = async (postId, postData) => {
    isLoading.value = true
    error.value = null

    try {
      const formData = new FormData()
      formData.append('title', postData.title)
      formData.append('content', postData.content)
      formData.append('tags', JSON.stringify(postData.tags))

      if (postData.avatar && postData.avatar.startsWith('data:')) {
        const avatarBlob = await fetch(postData.avatar).then((r) => r.blob())
        formData.append('avatar', avatarBlob, 'avatar.jpg')
      }

      if (postData.background && postData.background.startsWith('data:')) {
        const backgroundBlob = await fetch(postData.background).then((r) =>
          r.blob()
        )
        formData.append('background', backgroundBlob, 'background.jpg')
      }

      const response = await axios.put(
        `${apiBaseUrl}/api/posts/${postId}`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          withCredentials: true,
        }
      )

      // Update the currentPost with the new data
      currentPost.value = response.data
      return response.data
    } catch (err) {
      error.value = err.response
        ? err.response.data.error
        : 'An error occurred while updating the post'
      throw error.value
    } finally {
      isLoading.value = false
    }
  }

  const joinPost = async (postId, joinComment) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await axios.post(
        `${apiBaseUrl}/api/posts/${postId}/join`,
        { join_comment: joinComment },
        { withCredentials: true }
      )
      return response.data
    } catch (err) {
      error.value = err.response
        ? err.response.data.error
        : 'An error occurred while joining the post'
      throw error.value
    } finally {
      isLoading.value = false
    }
  }

  const leavePost = async (postId) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await axios.delete(
        `${apiBaseUrl}/api/posts/${postId}/leave`,
        { withCredentials: true }
      )
      return response.data
    } catch (err) {
      error.value = err.response
        ? err.response.data.error
        : 'An error occurred while leaving the post'
      throw error.value
    } finally {
      isLoading.value = false
    }
  }

  const announcePost = async (postId, announcement) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await axios.post(
        `${apiBaseUrl}/api/posts/${postId}/announce`,
        { announcement },
        { withCredentials: true }
      )
      return response.data
    } catch (err) {
      error.value = err.response
        ? err.response.data.error
        : 'An error occurred while making the announcement'
      throw error.value
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    error,
    posts,
    currentPost,
    createPost,
    getPosts,
    getPostById,
    deletePost,
    updatePost,
    joinPost,
    leavePost,
    announcePost,
  }
}
