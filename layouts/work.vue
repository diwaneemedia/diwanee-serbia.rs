<template>
  <div>
    <NavigationMini/>
    <nuxt/>
    <!-- footer / refactor it
    put it like this because a tag works for scroll behaviour on first page but doesn't work on work pages. 
    On them I use nuxt-link-->
    <footer class="footer">
      <div class="container footer__container">
        <div class="footer__contact">
          <p class="steel">Get in touch</p>
          <p>Resavska 23</p>
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
          <p class="text--center">
            <nuxt-link slot="url" class="footer__nav__link" tag="a" to="/contact/">Contact</nuxt-link>
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
                    ></path>
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
    </footer>
  </div>
</template>

<script>
import NavigationMini from "~/components/Navigation/NavigationMini";

export default {
  components: {
    NavigationMini
  }
};
</script>
