<template>
  <div class="appointment-form">
    <h2>Agendamento</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="appointmentDate">Data de Agendamento:</label>
        <input type="date" id="appointmentDate" v-model="formData.data" required>
      </div>
      <div class="form-group">
        <label for="appointmentTime">Horário de Agendamento:</label>
        <input type="time" id="appointmentTime" v-model="formData.hora" required>
      </div>
      <div class="form-group">
        <label for="appointmentName">Cliente:</label>
        <input type="text" id="appointmentName" v-model="formData.nome" required>
      </div>
      <div class="form-group">
        <label class="service-label-main">Serviço:</label><br>
        <div v-for="(service, index) in services" :key="index" class="radio-group">
          <input type="radio" :id="'service' + index" :value="service.servico" v-model="formData.servico">
          <label :for="'service' + index" class="service-label">{{ service.servico }}</label>
        </div>
      </div>
      <div class="form-buttons">
        <button type="submit">Salvar</button>
        <button type="button" @click="cancelForm">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
import servicoService from '../service/modalityService'
import agendamentoService from '../service/appoitmentService'

export default {
  data () {
    return {
      formData: {
        data: '',
        hora: '',
        nome: '',
        servico: ''
      },
      services: []
    }
  },

  async mounted () {
    await this.fetchServices()
  },

  methods: {

    async fetchServices () {
      try {
        this.services = await servicoService.getServicos()
      } catch (error) {
        console.error('Erro ao buscar serviços:', error)
      }
    },

    async submitForm () {
      try {
        await agendamentoService.createAgendamento(this.formData)

        alert('Agendamento criado com sucesso!')
        this.$emit('fechar')
      } catch (error) {
        console.error('Erro ao criar agendamento:', error)
        alert('Erro ao criar agendamento!')
      }
    },

    cancelForm () {
      this.$emit('fechar')
      this.resetForm()
    },

    resetForm () {
      this.formData = {
        appointmentDate: '',
        appointmentTime: '',
        clientName: '',
        selectedService: ''
      }
    }
  }
}
</script>

<style scoped>
.appointment-form {
  width: 900px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
  background: linear-gradient(to bottom, #ffffff, #808080, #000000);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  color: black;
}

.service-label-main,
.service-label {
  color: white;
}

input[type="date"],
input[type="time"],
input[type="text"],
button {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  background-color: #1b1b1b;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #888a8b;
}

input[type="radio"] {
  margin-right: 5px;
}

.radio-group {
  margin-bottom: 5px;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
</style>
