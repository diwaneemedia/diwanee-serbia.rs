<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__contact">
        <p class="steel">Get in touch</p>
        <p>Resavska 23</p>
        <p>11000 Belgrade</p>
        <p>T: 381 11 - 3340 117</p>
      </div>

      <div class="footer__nav">
        <!-- left part -->
        <ul class="footer__nav--left">
          <li class="footer__nav__item">
            <a href="#home">Home</a>
          </li>
          <li class="footer__nav__item">
            <a href="#about">About</a>
          </li>
          <li class="footer__nav__item">
            <a href="#brands"></a>Our Brands
          </li>
          <li class="footer__nav__item">
            <a href="#jobs">Jobs</a>
          </li>
        </ul>
        <!-- center -->
        <p class="footer__nav--center">
          <nuxt-link slot="url" class="footer__nav__item" tag="a" to="/contact/">Contact</nuxt-link>
        </p>
        <!-- right -->
        <div class="footer__nav--right">
          <a href="#home">
            <svg viewBox="0 0 21.057 21.057">
              <defs>
                <style>
                  .cls-2 {
                    fill: #fff;
                  }
                </style>
              </defs>
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
        <Social/>

        <div class="footer__bottom__links">
          <a href="http://www.diwanee.com">www.diwanee.com</a>
          <a href="http://www.webedia-group.com/">
            <img src="~/assets/images/webedia-logo.svg" alt="webedia">
          </a>
        </div>

        <p>COPYRIGHT © DIWANEE ALL RIGHTS RESEREVED</p>
      </div>
    </div>
  </footer>
</template>

<script>
import Social from "~/components/UI/Social";
export default {
  components: {
    Social
  }
};
</script>


<style lang="scss">
@import "~/assets/scss/master.scss";

.footer {
  background-color: $dark;
  color: $white;
  padding-top: 9.1rem;
  &__contact {
    margin-bottom: 5.3rem;
    .steel {
      color: $steel;
      font-weight: 500;
      margin-bottom: 2.1rem;
    }
  }
  &__nav {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $dark-grey;
    padding-bottom: 2.1rem;

    &__item {
      line-height: 1.94;
      font-size: 1.6rem;
    }

    &--right {
      width: 2.1rem;
      align-self: flex-end;
    }
  }
}

.footer__bottom {
  text-align: center;
  color: $steel;
  padding: 2.8rem 0 3.3rem;
  &__links {
    a {
      display: block;
      img {
        width: 7.95rem;
        margin: 0 auto;
      }
    }
  }
  a {
    font-size: 1.4rem;
    line-height: 1.71;
    margin: 2.3rem 0 2rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.25;
    color: #46474a;
  }
}
</style>
