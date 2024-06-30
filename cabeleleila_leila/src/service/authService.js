import axios from 'axios'

const API_URL = 'http://localhost:3000/auth'

const authService = {
  login: async (credentials) => {
    try {
      console.log('Enviando requisição de login com credenciais:', credentials)
      const response = await axios.post(`${API_URL}/login`, credentials)
      console.log('Resposta do servidor:', response)

      const { accessToken } = response.data.data
      if (accessToken) {
        window.localStorage.setItem('AccessToken', accessToken)
      }

      return true
    } catch (error) {
      console.error('Erro de autenticação:', error)
      throw error
    }
  }
}

export default authService
