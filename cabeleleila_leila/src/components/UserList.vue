<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.nome }}</li>
    </ul>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  data () {
    return {
      users: []
    }
  },
  async created () {
    const response = await api.get('/users')
    this.users = response.data
  }
}
</script>
