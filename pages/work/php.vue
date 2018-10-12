<template>
  <div id="home">

    <Navigation />

    <div class="work-details">

      <div class="container">

        <h2 class="work-details-title">
          <span class="line-title" /> PHP DEVELOPER
        </h2>

        <h5 class="work-details-subheadings">
          JOB REQUIREMENTS
        </h5>

        <ul class="work-details-description">
          <li>- More than 2 years’ experience with any of listed PHP framework (Zend framework, Laravel, Symphony,
            SlimPHP, Yii,Cake PHP)</li>
          <li> - Strong understanding of OOP concepts</li>
          <li>- MySQL</li>
          <li> - Smarty template engine</li>
          <li> - Memcached</li>
          <li>- ElasticSearch</li>
          <li>- Git</li>
          <li>- Composer</li>
          <li> - Apache</li>
          <li> - Work on Linux OS (Mac OS X)</li>
          <li> - English language</li>
        </ul>

        <h5 class="work-details-subheadings">
          RESPONSIBILITIES
        </h5>

        <ul class="work-details-description">
          <li>- Work as a part of team</li>
          <li>- Write “clean” and well-designed code</li>
          <li>- Contribute in all phases of the development lifecycle</li>
          <li>- Develop and deploy new features to facilitate related procedures and tools if necessary</li>
          <li>- Produce, update and/or maintain accurate project documentation</li>
        </ul>

        <h5 class="work-details-subheadings">
          FOLLOWING WILL BE CONSIDERED AS AN ASSET
        </h5>

        <ul class="work-details-description">
          <li>- NoSQL databases (Redis, Neo4J ..)</li>
          <li>- NginX</li>
          <li>- Varnish</li>
          <li>- APC</li>
          <li>- JavaScript, jQuery</li>
          <li>Ext JS</li>
          <li>- Other programming languages, please state the level of proficiency</li>
          <li>- Please state which Framework you’ve worked with</li>
        </ul>

        <h5 class="work-details-subheadings">
          WE LOOK FORWARD TO YOUR APPLICATION, WHICH SHOULD INCLUDE
        </h5>

        <ul class="work-details-description">
          <li>- CV</li>
          <li>- Current and desired salary</li>
          <li>- Your start date</li>
          <li>- Other interests</li>
        </ul>

        <p class="work-details-outro">
          If you have please share with us a git repositories links.
          <br><br>
          This is a full-time, in-house position. If you are someone who enjoys challenges, who is curious, always
          searching for
          new solutions, evolving technologies, and you have the required qualifications, please send us your CV
          on-line:
          posao@diwanee-serbia.com
          <br><br>
          Due to high volume of job applications, we cannot respond to your application individually, only successful
          applicants
          will be contacted.
        </p>

      </div>

    </div>

    <Contact id="contact" />

    <Footer />

  </div>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import Contact from "~/components/Contact/Contact.vue";
import Footer from "~/components/Footer/Footer.vue";

export default {
  components: {
    Navigation,
    Contact,
    Footer
  },
  mounted() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/master.scss";

#home {
  margin-bottom: 9.1rem;
  @include breakpoint(desktop) {
    margin-bottom: 15.7rem;
  }
}
</style>
