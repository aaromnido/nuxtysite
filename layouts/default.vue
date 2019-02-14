<template>
  <div class="container">
    <header class="header">
      <h2>Header</h2>
    </header>
    <main class="main">
      <nuxt />
    </main>
    <footer class="footer">
      <h2>Footer</h2>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

