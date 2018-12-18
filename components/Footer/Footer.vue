<template>
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
            <a href="#header--hp">Home</a>
          </li>
          <li class="footer__nav__link">
            <a href="#about--hp">About</a>
          </li>
          <li class="footer__nav__link">
            <a href="#brands--hp">Our Brands</a>
          </li>
          <li class="footer__nav__link">
            <a href="#jobs--hp">Jobs</a>
          </li>
        </ul>
        <!-- center -->
        <p class="text--center">
          <nuxt-link slot="url" class="footer__nav__link" tag="a" to="/contact/">Contact</nuxt-link>
        </p>
        <!-- right -->
        <div class="footer__nav--right">
          <a href="#header--hp">
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

  &__container {
    display: grid;
    @include breakpoint(desktop) {
      grid-template-columns: 1fr 3fr;
      padding-top: 21.6rem;
    }
  }

  &__contact {
    grid-column: 1;
    margin-bottom: 5.2rem;
    grid-row: 1;
    @include breakpoint(desktop) {
      margin-top: -4rem;
      margin-bottom: 0;
      border-bottom: 1px solid $dark-grey;
    }

    .steel {
      color: $steel;
      font-weight: 500;
      margin-bottom: 2.1rem;
    }
  }

  &__nav {
    grid-column: 1/-1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-bottom: 2.6rem;
    border-bottom: 1px solid $dark-grey;
    @include breakpoint(desktop) {
      grid-row: 1;
      grid-column: 2;
      grid-template-columns: 2fr 2fr 6fr;
    }

    &__link {
      line-height: 1.94;
      font-size: 1.6rem;
    }

    &--right {
      align-self: flex-end;
      justify-self: flex-end;
      &-arrow {
        width: 2.1rem;
        fill: #fff;
      }
    }
  }

  // Bottom part
  &__bottom {
    text-align: center;
    color: $steel;
    padding: 2.8rem 0 3.3rem;
    @include breakpoint(desktop) {
      display: grid;
      grid-column: 1/-1;
      grid-template-columns: repeat(3, 1fr);
    }

    &__item1 {
      margin-bottom: 2.1rem;
      @include breakpoint(desktop) {
        grid-column: 3;
        margin: 0;
        justify-content: flex-end;
      }
    }

    &__item2 {
      font-size: 1.4rem;
      line-height: 1.71;
      display: block;
      margin-bottom: 2.2rem;
      @include breakpoint(desktop) {
        grid-column: 1;
        grid-row: 1;
        text-align: left;
      }
    }

    &__item3 {
      margin-bottom: 2.5rem;
      width: 8rem;
      display: block;
      margin: 0 auto 2.5rem;
      @include breakpoint(desktop) {
        grid-column: 2;
        grid-row: 1;
      }
    }

    &__item4 {
      color: #46474a;
      font-size: 1.2rem;
      line-height: 1.25;
      grid-column: 2;
      grid-row: 2;
    }
  }
}
</style>

