<template>
  <section>
    <div class="hero">
      <h4>CONTACT</h4>
      <h1>Let’s chat.</h1>
    </div>
    <div class="section mb-6">
      <div class="content-left">
        <h2>Contact us for rates</h2>
        <p>We like taking projects at a flat rate and typically for at least 3 months. Our pricing is premium and custom per project. With that, you get a premium service and a premium product.</p>

        <h2>Book an appointment</h2>

        <p class="text-center apointment">
          <a href="https://calendly.com/patrick-lu/phone-chat" class="button button-outline" target="_blank">SCHEDULE A PHONE CONSULT</a>
          <p>Or use the form below to tell us about your development needs, and we’ll call you back to schedule an appointment. Please be as detailed as possible. Include what industry you need service for along with any specific document requests. To help us best serve your inquiry, we recommend that you first describe the issue you’re having before telling us what you want to achieve. You may also email or call us to make an appointment. Our general response time is within one business day.</p>
          <p>
            <img src="@/assets/images/dummy-form2.png" alt="" class="dummy-form">
          </p>
        </p>
      </div>



      <div class="sidebar">
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


  </section>
</template>

<style scoped>
  .hero {
    text-align: center;
    padding: 6vw 8vw;
    margin-bottom: 70px;
  }
  .hero h1 {
    font-family: "Merriweather", times, serif;
    font-weight: 300;
    font-size: 4.5vw;
    line-height: 1.1em;
  }
  .hero h4 {
    font-family: 'Niramit', 'Helvetica Neue', Arial, sans-serif;
    color: #e54a35;
    margin-bottom: 1rem;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 2px;
  }
  .sidebar h2,
  .sidebar h3,
  .sidebar h4 {
    margin-bottom: 1.6rem;
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
  .apointment .button{
    margin: 2rem 0;
  }
  .dummy-form{
    margin: 2rem 0 0 0;
  }
</style>
