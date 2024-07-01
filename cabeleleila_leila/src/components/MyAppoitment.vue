<template>
  <div class="meus-agendamentos">
    <h2 v-if="!modoEdicao">Meus Agendamentos</h2>
    <table v-if="!modoEdicao" class="agendamentos-table">
      <thead>
        <tr>
          <th>Data</th>
          <th>Horário</th>
          <th>Serviço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(agendamento, index) in agendamentos" :key="agendamento.id">
          <td>{{ agendamento.data }}</td>
          <td>{{ agendamento.hora }}</td>
          <td>{{ agendamento.servico }}</td>
          <td class="acoes">
            <span @click="editarAgendamento(agendamento.id, index)">
              <i class="mdi mdi-pencil"></i>
            </span>
            <span @click="deletarAgendamento(agendamento.id, index)">
              <i class="mdi mdi-delete"></i>
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <edit-appoitment v-if="modoEdicao" :agendamentoId="agendamentoSelecionado.id" @fechar="fecharEdicao" />
  </div>
</template>

<script>
import EditAppoitment from './EditAppoitment.vue'
import agendamentoService from '../service/appoitmentService'

export default {
  components: {
    EditAppoitment
  },
  data () {
    return {
      agendamentos: [],
      modoEdicao: false,
      agendamentoSelecionado: {}
    }
  },
  methods: {
    async buscarAgendamentos () {
      try {
        this.agendamentos = await agendamentoService.getAgendamentos()
      } catch (error) {
        console.error('Erro ao buscar agendamentos:', error)
      }
    },
    editarAgendamento (id, index) {
      this.agendamentoSelecionado = { ...this.agendamentos[index] }
      this.agendamentoSelecionado.id = id
      this.modoEdicao = true
    },
    async deletarAgendamento (id, index) {
      if (confirm('Tem certeza que deseja deletar este agendamento?')) {
        try {
          await agendamentoService.deleteAgendamento(id)
          this.agendamentos.splice(index, 1)
        } catch (error) {
          console.error('Erro ao deletar agendamento:', error)
        }
      }
    },
    fecharEdicao () {
      this.modoEdicao = false
      this.agendamentoSelecionado = {}
      this.buscarAgendamentos()
    }
  },
  mounted () {
    this.buscarAgendamentos()
  }
}
</script>
<style scoped>
.meus-agendamentos {
  width: 80%;
  margin: auto;
}

.agendamentos-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.agendamentos-table th,
.agendamentos-table td {
  padding: 8px;
  border: 1px solid #ccc;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.agendamentos-table th {
  background-color: #f2f2f2;
}

.agendamentos-table tbody tr:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

.acoes {
  text-align: center;
}

.mdi {
  cursor: pointer;
  font-size: 1.2rem;
  margin-right: 10px;
}

.mdi:hover {
  color: #ff0000;
}
</style>
