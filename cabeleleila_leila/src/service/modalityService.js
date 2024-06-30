import axios from 'axios'

const API_URL = 'http://localhost:3000'

const servicoService = {
  getServicos: async () => {
    try {
      const response = await axios.get(`${API_URL}/servicos`)
      return response.data.sort((sA, sB) => sA.servico.localeCompare(sB.servico))
    } catch (error) {
      console.error('Erro ao buscar serviços:', error)
      throw error
    }
  }
}

export default servicoService
