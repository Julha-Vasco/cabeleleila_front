<template>
  <div class="background-image">
    <h1 class="welcome-title">Bem-vindo ao Cabeleleila Leila</h1>
    <login-form @login="handleLogin"></login-form>
  </div>
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
        const response = await authService.login(credentials)
        if (response.user) {
          alert('Login bem-sucedido')
          router.push({ name: 'agendamento' })
        } else {
          alert('Credenciais inválidas')
        }
      } catch (error) {
        console.error('Erro ao fazer login:', error)
      }
    }

    return {
      handleLogin
    }
  }
}
</script>

<style scoped>
.background-image {
  background-image: url('@/assets/imagem1s.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.welcome-title {
  font-family: 'Great Vibes', cursive;
  font-size: 3rem;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
