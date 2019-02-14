<template>
  <footer class="footer">
    <div class="footer-left">
      <div class="footer-nav">
        <a href="/home">home</a>
        <a href="/about">about</a>
        <a href="/portfolio">portfolio</a>
        <a href="/contact">contact</a>
      </div>
      <div class="footer-address">
        <small>(850) 764-3189</small>
        <small>| patrick@quantfive.org</small>
        <br>
        <small>1810 Bonita Ave. Berkeley, CA 94709</small>
        <br>
        <small>development | startup advising</small>
      </div>
    </div>
    <div class="footer-right">
      <small>Quant Five is a boutique software development firm that develops software for some of the most innovative individuals and emerging companies in the tech and entertainment industries.</small>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid rgba(128, 128, 128, 0.8);
  padding: 50px 0 180px 0;
  margin-top: 130px;
  display: flex;
  justify-content: space-between;
}
.footer-left,
.footer-right {
  max-width: 325px;
}
.footer-right {
  text-align: right;
}
.footer-nav {
  margin-bottom: 30px;
}
.footer-nav a {
  border-right: 1px solid #081b33;
  padding: 0 0.5rem;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  display: inline-block;
}
.footer-nav a:first-child {
  padding-left: 0;
}
.footer-nav a:last-child {
  border: 0;
  margin-right: 0;
}
.footer-nav a:hover {
  color: #081b33;
}
@media (max-width: 740px) {
  .footer {
    flex-direction: column;
    text-align: center;
  }
  .footer-left,
  .footer-right {
    max-width: 100%;
  }
  .footer-right {
    text-align: center;
    margin-top: 40px;
  }
}
</style>

