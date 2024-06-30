<template>
  <footer class="footer">
    <p>Nos siga em nossas redes sociais</p>
    <div class="social-icons">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <svg class="icon">
          <path :d="mdiFacebook" />
        </svg>
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <svg class="icon">
          <path :d="mdiTwitter" />
        </svg>
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <svg class="icon">
          <path :d="mdiInstagram" />
        </svg>
      </a>
    </div>
    <p>©2024 · Privacy Policy</p>
  </footer>
</template>

<script>
import { mdiFacebook, mdiTwitter, mdiInstagram } from '@mdi/js'

export default {
  name: 'FooterIcon',
  data () {
    return {
      mdiFacebook,
      mdiTwitter,
      mdiInstagram
    }
  }
}
</script>

<style scoped>
.footer {
  color: white;
  text-align: center;
  padding: 1em 0;
  margin-top: 1em;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 1em;
}

.icon {
  width: 24px;
  height: 24px;
  fill: white;
  transition: fill 0.3s;
}

.social-icons a:hover .icon {
  fill: #ddd;
}

.footer p {
  margin-bottom: 0.5em;
}
</style>
