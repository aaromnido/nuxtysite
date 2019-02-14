<template>
  <div class="site-container">
    <Header/>
    <main class="main">
      <nuxt/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
  .site-container{
    width: auto;
    max-width: 100%;
  }
</style>


