<template>
  <button class="logout-button" @click="logout">
    <span class="mdi mdi-logout"></span> Logout
  </button>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  setup () {
    const router = useRouter()
    const store = useStore()

    const logout = () => {
      store.dispatch('logout')
      router.push('/')
    }

    return {
      logout
    }
  }
}
</script>
<style scoped>
.logout-button {
  padding: 8px 16px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
}

.logout-button:hover {
  background-color: #ffffff;
  color: #000000;
  transform: scale(1.05);
}

.logout-button .mdi {
  margin-right: 8px;
}
</style>
