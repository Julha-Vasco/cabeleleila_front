<template>
  <div class="home-view">
    <background-image>
      <h1 class="welcome-text">Bem-vindo ao Cabeleleila Leila</h1>
      <div class="tabs-content">
        <tabs-container>
          <template v-slot>
            <centered-text />
          </template>
        </tabs-container>
      </div>
    </background-image>
  </div>
</template>

<script>
import BackgroundImage from '@/components/BackgroundImage.vue'
import TabsContainer from '@/components/TabsContainer.vue'
import CenteredText from '@/components/CenteredText.vue'

export default {
  components: {
    BackgroundImage,
    TabsContainer,
    CenteredText
  }
}
</script>

<style scoped>
.home-view {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.welcome-text {
  font-family: 'Great Vibes', cursive;
  font-size: 3rem;
  color: white;
  text-align: center;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.tabs-content {
  position: relative;
  width: 100%;
  margin-top: 30px;
}

.slot-content {
  position: relative;
  color: white;
  text-align: center;
  padding: 20px;
  margin-top: 20px;
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
