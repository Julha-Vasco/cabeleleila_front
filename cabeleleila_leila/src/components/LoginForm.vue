<template>
  <div class="login-container">
    <form @submit.prevent="login" class="login-form">
      <div class="login-text">Login</div>
      <input type="text" v-model="username" placeholder="Usuário" required>
      <input type="password" v-model="password" placeholder="Senha" required>
      <button type="submit">Login</button>
      <p class="register-link">Ainda não possui uma conta? <router-link to="/register">Cadastre-se aqui</router-link></p>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$emit('login', {
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100vh;
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
}

.login-form {
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
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

.login-form button {
  width: 100%;
  padding: 10px;
  background-color: #1b1b1b;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-form button:hover {
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
