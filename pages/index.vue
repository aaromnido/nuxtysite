<template>
  <section>
    <div class="hero">
      <h4>QUANT FIVE</h4>
      <h1>Zero to launch in
        <br>one month
      </h1>
    </div>
    <div class="section mb-6">
      <div class="content">
        <h2>Building products from scratch since 2015</h2>
        <p>Headquartered in Berkeley, our firm specializes in developing products from the seed of an idea to the final working product. Our motto is idea to launch in 1 month. As previous startup founders ourselves, we understand the need for speed without sacrificing quality. Let us handle your development while you figure out the market, go to launch strategy, and talk to your customers. Since we're previous startup founders too, we can also help a little with that.</p>

        <p>Currently, our engineers are all from Berkeley so you have the peace of mind of working with engineers from the top Computer Science University in the world. We guarantee quality.</p>

        <p>Get in touch with us to set up a consultation, or use the contact form at the bottom of this page to enquire whether our services are right for you.</p>

        <nuxt-link to="/about" class="button button-outline">Learn more</nuxt-link>
      </div>
      <div class="sidebar">
        <h2>Contact</h2>
        <h3>
          <strong>➤&nbsp;LOCATION</strong>
        </h3>
        <h4>1810 Bonita Ave.
          <br>Berkeley, CA 94709
        </h4>
        <h3>
          <strong>☎ CONTACT</strong>
        </h3>
        <h4>
          <a href="mailto:patrick@quantfive.org">patrick@quantfive.org</a>
          <br>(850) 764-3189
        </h4>
      </div>
    </div>
    <div class="section">
      <div class="content-full">
        <h2>Areas of Development</h2>
        <div class="column-3">
          <div class="column">
            <h5>React.js</h5>
            <p>Our team has ample experience building out apps in React.js having built out apps that scaled to over 10k users. We utilize webpack to build assets and Redux to store data. We also have experience building out apps in React Native. We love to use React for the front end.</p>
          </div>
          <div class="column">
            <h5>Node.js</h5>
            <p>For backends, one we like is Node. We like to build a lot of microservices with Node as it's quick and easy to get online. For non cpu intensive operations, Node is very fast during execution and allows for easy real time applications. Plus, it's Javascript! </p>
          </div>
          <div class="column">
            <h5>Django</h5>
            <p>For heavier applications, we love Django. It gives the benefits of a really strong ORM so interacting with the database is easy. It's also starting to develop a real time application framework called Channels. The robustness of Django let's us build out complex apps.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="content-full">
        <div class="column-3">
          <div class="column">
            <h5>Java</h5>
            <p>Everyone from Berkeley knows Java. We don't prefer to build apps in Java because industry is moving away from it, but we will do it if needed. We use Java Spring as the backend framework.</p>
          </div>
          <div class="column">
            <h5>SQL</h5>
            <p>We mostly liked to use PostgreSQL because of the advanced data structures it supports, but we are also comfortable using any other SQL based db such as MySQL.</p>
          </div>
          <div class="column">
            <h5>Other tech</h5>
            <p>We've also worked with various other tech and API's such as WebRTC, Stripe, social login (Facebook, Twitter, etc), Twilio, Sendbird, NewRelic, CircleCI, Wowza, and more.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(rgba(8, 27, 51, 0.3), rgba(8, 27, 51, 0.8)),
    url("~assets/images/video-bg.png");
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 6vw 8vw;
  margin-bottom: 70px;
}
.hero h1 {
  color: white;
  font-family: "Merriweather", times, serif;
  font-weight: 400;
  font-size: 4.5vw;
  line-height: 1.1em;
}
.hero h4 {
  color: #e54a35;
  margin-bottom: 1rem;
}
.sidebar h2,
.sidebar h3,
.sidebar h4 {
  margin-bottom: 1.6rem;
}
</style>
