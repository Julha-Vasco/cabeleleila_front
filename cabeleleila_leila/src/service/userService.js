import axios from 'axios'

const API_URL = 'http://localhost:3000/user'

const userCreateService = {
  userCreate: async (formData) => {
    try {
      const response = await axios.post(API_URL, formData)
      return response.data
    } catch (error) {
      console.error('Erro ao criar usuário:', error)
      throw error
    }
  }
}

export default userCreateService
