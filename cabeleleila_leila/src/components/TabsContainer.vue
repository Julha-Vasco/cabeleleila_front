<template>
  <div class="tabs-container">
    <div class="tabs">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab"
        :class="{ 'active': activeTab === index }"
        @click="switchTab(index)"
      >
        {{ tab.name }}
        <span class="underline" v-if="activeTab === index"></span>
      </div>
    </div>
    <div class="tab-content">

      <template v-if="activeTab === 0">
        <slot></slot>
      </template>
      <template v-else-if="activeTab === 1">
        <new-appoitment />
      </template>
      <template v-else-if="activeTab === 2">
        <my-appoitment />
      </template>
    </div>
  </div>
</template>

<script>
import NewAppoitment from '@/views/NewAppoitment.vue'
import MyAppoitment from './MyAppoitment.vue'

export default {
  data () {
    return {
      activeTab: 0,
      tabs: [
        { name: 'Home' },
        { name: 'Novo Agendamento' },
        { name: 'Meus Agendamentos' }
      ]
    }
  },
  components: {
    NewAppoitment,
    MyAppoitment
  },
  methods: {
    switchTab (index) {
      this.activeTab = index
    }
  }
}
</script>

<style scoped>
.tabs-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 20vh;
  z-index: 2;
}

.tabs {
  display: flex;
  justify-content: space-between;
  width: 30%;
}

.tab {
  position: relative;
  color: rgb(0, 0, 0);
  cursor: pointer;
  padding-bottom: 8px;
}

.tab .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: white;
  transition: width 0.3s ease;
}

.tab.active .underline {
  width: 100%;
}
</style>
