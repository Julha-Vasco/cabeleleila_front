import axios from 'axios'

const API_URL = 'http://localhost:3000/auth'

const authService = {
  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/login`, credentials)

      const { accessToken } = response.data.data
      if (accessToken) {
        window.localStorage.setItem('AccessToken', accessToken)
      }

      return true
    } catch (error) {
      console.error('Erro de autenticação:', error)
      throw error
    }
  },
  isLoggedIn: () => {
    return !!window.localStorage.getItem('AccessToken')
  },

  logout: () => {
    window.localStorage.removeItem('AccessToken')
  }
}

export default authService
