<template>
  <div class="centered-text">
    <p>Somos especialistas em beleza, os melhores em cuidados com:</p>
    <ul>
      <li>Pele</li>
      <li>Unha</li>
      <li>Cabelo</li>
      <li>Penteados</li>
      <li>Maquiagens</li>
      <li>Sobrancelha</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CenteredText'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap');

.centered-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: auto;
  padding: 25px;
  font-size: 1.9rem;
  font-family: 'Philosopher', sans-serif;
  margin-top: 50px;
}

.centered-text p {
  margin-top: 20px;
}

.centered-text ul {
  list-style-type: none;
  margin: 15px 0 0 0;
  text-align: left;
  display: inline-block;
  padding-left: 2rem;
}

.centered-text li {
  position: relative;
  margin-top: 5px;
  transition: transform 0.3s, font-size 0.3s, color 0.3s;
  color: rgb(0, 0, 0);
}

.centered-text li::before {
  content: '•';
  position: absolute;
  left: -2rem;
  color: rgb(0, 0, 0);
  transition: color 0.3s;
}

.centered-text li:hover {
  font-size: 1.8rem;
  transform: scale(1.1);
  color: rgb(255, 255, 255);
}

.centered-text li:hover::before {
  color: rgb(255, 255, 255);
}
</style>
