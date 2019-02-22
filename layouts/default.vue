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
    Footer,
    transition: 'fade'
  }
};

</script>

<style>
.site-container {
  width: auto;
  max-width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>


