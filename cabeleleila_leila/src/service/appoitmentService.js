import axios from 'axios'

const API_URL = 'http://localhost:3000/agendamentos'

const agendamentoService = {
  getAgendamento: async (id) => {
    try {
      const token = window.localStorage.getItem('AccessToken')

      const response = await axios.get(`${API_URL}/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      return response.data
    } catch (error) {
      console.error('Erro ao buscar agendamentos:', error)
      throw error
    }
  },

  getAgendamentos: async () => {
    try {
      const token = window.localStorage.getItem('AccessToken')

      const response = await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } })
      return response.data
    } catch (error) {
      console.error('Erro ao buscar agendamentos:', error)
      throw error
    }
  },

  async deleteAgendamento (id) {
    try {
      const token = window.localStorage.getItem('AccessToken')

      const response = await axios.delete(`${API_URL}/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      return response.data
    } catch (error) {
      console.error(`Erro ao deletar agendamento de ID ${id}:`, error)
      throw error
    }
  },

  updateAgendamento: async (id, formData) => {
    try {
      const token = window.localStorage.getItem('AccessToken')

      const response = await axios.put(`${API_URL}/${id}`, formData, { headers: { Authorization: `Bearer ${token}` } })
      return response.data
    } catch (error) {
      console.error('Erro ao atualizar agendamento:', error)
      throw error
    }
  },

  createAgendamento: async (formData) => {
    try {
      const token = window.localStorage.getItem('AccessToken')

      const response = await axios.post(API_URL, formData, { headers: { Authorization: `Bearer ${token}` } })
      return response.data
    } catch (error) {
      console.error('Erro ao criar agendamento:', error)
      throw error
    }
  }
}

export default agendamentoService
