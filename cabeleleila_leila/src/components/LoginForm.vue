<template>
  <div >
    <form @submit.prevent="login" class="login-form">
      <div class="login-text">Login</div>
      <input type="text" v-model="email" placeholder="Usuário" required>
      <input type="password" v-model="password" placeholder="Senha" required>
      <div class="button-container">
        <button type="submit">Entrar</button>
      </div>
      <p class="register-link">Ainda não possui uma conta? <router-link to="/register">Cadastre-se aqui</router-link></p>
    </form>
  </div>
</template>

<script>
import authService from '@/service/authService'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      try {
        await authService.login({
          email: this.email,
          password: this.password
        })
        this.$emit('login-success')
        this.$router.push('/home')
      } catch (error) {
        this.errorMessage = 'Usuário ou senha incorretos.'
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(to bottom, #ffffff, #808080, #000000);
}

.login-form {
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8)
}

.login-text {
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
}

.login-form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.button-container button {
  width: 100%;
  max-width: 900px;
  padding: 10px;
  background-color: #1b1b1b;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button-container button:hover {
  background-color: #888a8b;
}

.register-link {
  margin-top: 10px;
  color: rgb(32, 32, 32);
  font-size: 0.9rem;
}

.register-link a {
  color: #0a0a0a;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
