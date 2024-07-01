<template>
  <div class="login-container">
    <form @submit.prevent="register" class="login-form">
      <div class="login-text">Cadastrar</div>
      <input type="text" v-model="username" placeholder="Usuário" required autocomplete="off">
      <input type="text" v-model="email" placeholder="E-mail" required autocomplete="off">
      <input type="password" v-model="password" placeholder="Senha" >
      <input type="password" v-model="confirmPassword" placeholder="Confirme a senha" required autocomplete="off">
      <div class="button-container">
        <button type="submit">Cadastrar</button>
        <button type="button" @click="cancel">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
import userCreateService from '@/service/userService'

export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      username: ''
    }
  },
  methods: {
    async register () {
      if (this.password !== this.confirmPassword) {
        alert('As senhas não correspondem.')
        return
      }

      if (this.isEmailRegisteredLocally(this.email)) {
        this.errorMessage = 'Este e-mail já está registrado.'
        return
      }

      const credentials = {
        email: this.email,
        password: this.password,
        username: this.username
      }

      try {
        const result = await userCreateService.userCreate(credentials)
        if (result) {
          alert('Registro bem-sucedido!')
          this.resetForm()
          this.$router.push('/home')
        }
      } catch (error) {
        console.error('Erro ao registrar:', error)
        alert('Houve um problema ao registrar. Tente novamente.')
      }
    },

    cancel () {
      this.$emit('fechar')
      this.resetForm()
      this.$router.push('/')
    },
    resetForm () {
      this.email = ''
      this.password = ''
      this.confirmPassword = ''
      this.username = ''
    }
  }
}
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(to bottom, #ffffff, #808080, #000000);
  background-image: url('@/assets/imagem1s.png');
  background-size: cover;
  background-position: center;
}

.login-form {
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
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
  justify-content: space-between;
}

.button-container button {
  width: 48%;
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
  color: white;
  font-size: 0.9rem;
}

.register-link a {
  color: #85d1f7;
  text-decoration: none;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
