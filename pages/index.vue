<template>
  <section>
    <div class="hero">
      <h4>QUANT FIVE</h4>
      <h1>Zero to launch in
        <br>one month
      </h1>
    </div>
    <div class="section mb-6">
      <div class="content-left">
        <h2>Building products from scratch since 2015</h2>
        <p>Headquartered in Berkeley, our firm specializes in developing products from the seed of an idea to the final working product. Our motto is idea to launch in 1 month. As previous startup founders ourselves, we understand the need for speed without sacrificing quality. Let us handle your development while you figure out the market, go to launch strategy, and talk to your customers. Since we're previous startup founders too, we can also help a little with that.</p>

        <p>Currently, our engineers are all from Berkeley so you have the peace of mind of working with engineers from the top Computer Science University in the world. We guarantee quality.</p>

        <p>Get in touch with us to set up a consultation, or use the contact form at the bottom of this page to enquire whether our services are right for you.</p>

        <nuxt-link to="/about" class="button button-outline mt-2">Learn more</nuxt-link>
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
    <div class="section">
      <div class="one-centered-column text-center section-quote">
        <h2>“Customers don’t care how much time something takes to build. They care only if it serves their needs.”</h2>
        <h5>— ERIC RIES —</h5>
      </div>
    </div>
    <div class="section">
      <div class="one-centered-column text-center section-form">
        <h2>Let's Chat</h2>
        <p>Use the form below to contact us regarding your development enquiry. Please be as detailed as possible. Include your industry along with any specific document requests. To help us best service your enquiry, we recommend that you first describe the issue you’re having before telling us what you want to achieve. You may also email or call us to make an appointment.</p>
        <p>For job opportunities, please email us your resume. We’re always looking for new and exceptional talent to lead the firm into uncharted fields of practice.</p>
        <img src="@/assets/images/dummy-form.png" alt="">
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
    font-weight: 400;
  }
  .section-quote{
    margin: 6vw auto;
    border-top: 1px solid rgba(128, 128, 128, 0.3);
    border-bottom: 1px solid rgba(128, 128, 128, 0.3);
    padding: 6vw
  }
  .section-quote h2{
    font-size: 26px;
  }
  .section-quote h5{
    color: #e54a35;
    margin-top: 2rem;
  }
  .section-form{
    padding: 6vw;
    padding-bottom: 0;
  }
  .section-form p{
    text-align: left;
    font-size: 14px;
  }
</style>
