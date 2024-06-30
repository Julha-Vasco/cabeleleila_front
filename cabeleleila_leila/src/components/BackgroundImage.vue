<template>
  <div class="background-image">
    <slot></slot>

    <router-link
      v-if="!isAuthenticated"
      to="/login"
      class="login-button"
    >
      <span class="mdi mdi-account"></span> Login
    </router-link>

    <footer-icon class="footer-icon" />
  </div>
</template>

<script>
import FooterIcon from './FooterIcon.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    FooterIcon
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style scoped>
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/imagBack.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  opacity: 0.6;
}

.footer-icon {
  margin-top: auto;
}

.login-button {
  position: absolute;
  bottom: 90%;
  right: 20px;
  padding: 10px 20px;
  background-color: #000000;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
}

.login-button .mdi {
  margin-right: 5px;
  font-size: 1.2rem;
}

.login-button:hover {
  background-color: #ffffff;
  color: #000000;
  transform: scale(1.1);
}
</style>
