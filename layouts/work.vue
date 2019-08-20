<template>
  <div>
    <div class="container l-container--grid l-container--grid--main">
      <div class="l-container--grid__item"/>
      <div class="l-container--grid__item"/>
      <div class="l-container--grid__item l-container--grid__item--phone"/>
      <div class="l-container--grid__item"/>
      <div class="l-container--grid__item"/>
      <div class="l-container--grid__item last"/>
    </div>
    <NavigationMini/>
    <div class='container'>
      <div class="work__container">
        <nuxt/>
        <div class='sticky-holder'>
          <JobsNavSticky/>
        </div>
      </div>
    </div>

    <!-- footer / refactor it
    put it like this because a tag works for scroll behaviour on first page but doesn't work on work pages.
    On them I use nuxt-link-->
    <footer class="footer">
      <div class="container footer__container">
        <p class="footer__small-heading">Contact</p>
        <p class="steel">Get in touch</p>
        <div class="footer__contact">
          <p>Kneza Miloša 3</p>
          <p>11000 Belgrade</p>
          <p>T: 381 11 - 3340 117</p>
        </div>

        <div class="footer__nav">
          <!-- left -->
          <ul>
            <li class="footer__nav__link">
              <nuxt-link tag="a" to="/#header--hp">Home</nuxt-link>
            </li>
            <li class="footer__nav__link">
              <nuxt-link tag="a" to="/#about--hp">About</nuxt-link>
            </li>
            <li class="footer__nav__link">
              <nuxt-link tag="a" to="/#brands--hp">Our Brands</nuxt-link>
            </li>
            <li class="footer__nav__link">
              <nuxt-link tag="a" to="/#jobs--hp">Jobs</nuxt-link>
            </li>
          </ul>
          <!-- center -->
          <p>
            <nuxt-link slot="url" class="footer__nav__link" tag="a" to="/contact/">Contact</nuxt-link><br/>
             <a href="/game"  class="footer__nav__link" tag="a" to="/game/">Game</a>
          </p>
          <!-- right -->
          <div class="footer__nav--right">
            <a href="#">
              <svg class="footer__nav--right-arrow" viewBox="0 0 21.057 21.057">
                <g id="arrow-white" transform="rotate(-90 10.529 10.528)">
                  <g id="arrow-forward">
                    <path
                      id="Path_1178"
                      d="M10.528 0L8.686 1.842l7.37 7.37H0v2.632h16.056l-7.37 7.37 1.842 1.842 10.529-10.528z"
                      class="cls-2"
                      data-name="Path 1178"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer__bottom">
          <Social class="footer__bottom__item1"/>

          <a class="footer__bottom__item2" href="http://www.diwanee.com">www.diwanee.com</a>
          <a class="footer__bottom__item3" href="http://www.webedia-group.com/">
            <img src="~/assets/images/webedia-logo.svg" alt="webedia">
          </a>

          <p class="footer__bottom__item4">COPYRIGHT © DIWANEE ALL RIGHTS RESEREVED</p>
        </div>
      </div>

      <no-ssr><CookieConsent /></no-ssr>

    </footer>
  </div>
</template>
<script>
import NavigationMini from "~/components/Navigation/NavigationMini";
import JobsNavSticky from "~/components/JobsNavSticky/JobsNavSticky";
import CookieConsent from "~/components/CookieConsent";
import Social from "~/components/UI/Social";


export default {
  components: {
    NavigationMini,
    JobsNavSticky,
    Social,
    CookieConsent
  },
  head(){
    return {
      title: "Diwanee Serbia - Jobs",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'canonical', name: 'canonical', content: 'http://www.diwanee-serbia.rs/work/' },
        { hid: 'og:url', name: 'og:url', content: 'http://www.diwanee-serbia.rs/work/' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'http://www.diwanee-serbia.rs/work/' },
      ]
    }
  },
};
</script>
<style lang="scss">
@import "~assets/scss/master.scss";
  .work__container {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 79% 53%;
    grid-template-columns: 79% 53%;
    @include breakpoint(phone) {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
    }
  }
  .button {
    color: #c41230;
    font-size: 1.2rem;
    pointer-events: auto;
    background: #f8f8f8;
    padding: 14px 23px;
    -ms-grid-column-align:center;
    align-self: center;
    margin-bottom: 8.8rem;
    text-transform: uppercase;
    display: inline-block;
    @include breakpoint(phone) {
      margin-bottom: 4rem;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .l-container--grid--main {
    position: absolute;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
  .sticky-holder {
    position: relative;
  }
  @media screen and (max-width: 768px) {
    .l-container--grid__item--phone {
      display: none;
      height: 100%;
      width: 1px;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      background-color: #eeeeee;
    }
  }
</style>
