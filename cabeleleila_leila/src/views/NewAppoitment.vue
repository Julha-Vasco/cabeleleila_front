<template>

    <appointment-form></appointment-form>

</template>

<script>
import AppointmentForm from '@/components/AppointmentForm.vue'

export default {
  components: {
    AppointmentForm
  }
}
</script>

<style scoped>
.agendamento-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}
</style>
