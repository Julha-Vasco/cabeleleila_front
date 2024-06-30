<template>
  <login-form @login="handleLogin"></login-form>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import authService from '../service/authService'
import { useRouter } from 'vue-router'

export default {
  components: {
    LoginForm
  },

  setup () {
    const router = useRouter()

    const handleLogin = async (credentials) => {
      try {
        console.log('Tentando fazer login com credenciais:', credentials)
        const response = await authService.login(credentials)
        if (response.user) {
          console.log('Login bem-sucedido:', response.user)
          router.push({ name: 'agendamento' }) // Redireciona para a rota após login
        } else {
          console.error('Credenciais inválidas')
          // Lógica para lidar com credenciais inválidas, se necessário
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error)
        // Lógica para lidar com erro de login, exibir mensagem de erro, etc.
      }
    }

    return {
      handleLogin
    }
  }
}
</script>

<style scoped>
</style>
