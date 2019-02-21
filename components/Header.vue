<template>
  <header class="header">
    <div class="nav-item-phone">
      <nuxt-link to="/contact">
        <span>☎ (850) 764-3189</span>
      </nuxt-link>
    </div>

    <div class="logo-image">
      <nuxt-link to="/">
        <img src="@/assets/images/logo-q5.png" width="40">
      </nuxt-link>
    </div>

    <nav class="site-navigation" role="navigation">
      <div class="nav-item collection homepage active">
        <nuxt-link to="/" class="nav-item-page">
          <span>Home</span>
        </nuxt-link>
      </div>
      <div class="nav-item collection">
        <nuxt-link to="/blog" class="nav-item-blog">
          <span>blog</span>
        </nuxt-link>
      </div>
      <div class="nav-item external">
        <a href="https://calendly.com/patrick-lu/phone-chat" target="_blank">
          <span>get in touch</span>
        </a>
      </div>
      <div class="nav-item collection">
        <nuxt-link to="/portfolio" class="nav-item-page">
          <span>Portfolio</span>
        </nuxt-link>
      </div>
      <div class="nav-item collection">
        <nuxt-link to="/about" class="nav-item-page">
          <span>About</span>
        </nuxt-link>
      </div>
      <div class="nav-item collection">
        <nuxt-link to="/contact" class="nav-item-page">
          <span>Contact</span>
        </nuxt-link>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 110px 8vw;
  display: flex;
  justify-content: space-between;
}
.nav-item-phone {
  font-size: 14px;
  font-weight: 600;
  flex-basis: 35%;
}
.logo-image {
  background: transparent;
}
.site-navigation {
  display: flex;
  flex-basis: 35%;
  align-content: flex-end;
  align-items: right;
  justify-content: space-between;
  margin-bottom: 0;
}
.nav-item:last-child {
  margin-right: 0;
}
.nav-item a {
  color: #081b33;
  font-weight: 600;
  font-size: 14px;
  text-transform: lowercase;
  transition: all 0.4s ease-out;
  margin-bottom: 0;
}
.nav-item a:hover,
.nuxt-link-exact-active span {
  color: #e54a35;
}
@media (max-width: 1220px) {
  .nav-item-phone,
  .site-navigation {
    flex-basis: 40%;
  }
}
@media (max-width: 1060px) {
  .nav-item-phone,
  .site-navigation {
    flex-basis: 45%;
  }
}
@media (max-width: 960px) {
  .header {
    flex-direction: column;
    text-align: center;
  }
  .nav-item-phone,
  .site-navigation {
    flex-basis: 45%;
  }
  .logo-image {
    order: 1;
    margin-bottom: 40px;
  }
  .site-navigation {
    order: 2;
  }
  .nav-item-phone {
    order: 3;
    margin-top: 40px;
  }
}
@media (max-width: 470px) {
  .site-navigation {
    flex-direction: column;
  }
  .nav-item{
    margin: 1rem 0;
  }
  .nav-item a{
    font-size: 2rem;
  }
  .logo-image img {
    width: 106px;
    height: 70px;
  }
}
</style>

