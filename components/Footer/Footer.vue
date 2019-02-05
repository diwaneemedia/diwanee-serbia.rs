<template>
  <footer class="footer">

    <div class="container footer__container">
      <p class="footer__small-heading">Contact</p>
      <p class="steel">Get in touch</p>
      <div class="footer__contact">

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
        <p >
          <nuxt-link slot="url" class="footer__nav__link" tag="a" to="/contact/">Contact</nuxt-link><br/>
          <nuxt-link slot="url" class="footer__nav__link" tag="a" to="/game/">Game</nuxt-link>
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
  padding-top: 10.1rem;
  .steel {
    color: $steel;
    font-weight: 500;
    margin-bottom: 5.1rem;
    font-family: "Playfair", sans-serif;
    font-size: 3.6rem;
    color: white;
    @include breakpoint(desktop) {
      -ms-grid-column: 1;
      -ms-grid-row:2;
      grid-column: 1;
      grid-row:2;
      margin-bottom: 5.1rem;
    }
  }
  &__small-heading {
    -ms-grid-row:1;
    -ms-grid-column:1;
    grid-row:1;
    grid-column:1;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color:$steel;
    font-size: 12px;
    letter-spacing: 1.2px;
    margin-bottom: 5px;
    text-transform: uppercase;
  }
  &__container {
    display: -ms-grid;
    display: grid;
    @include breakpoint(desktop) {
      -ms-grid-columns: 22% 78%;
      grid-template-columns: 22% 78%;

    }
  }

  &__contact {
    -ms-grid-column: 1;
    -ms-grid-row: 3;
    grid-column: 1;
    margin-bottom: 5.2rem;
    grid-row: 3;
    @include breakpoint(desktop) {

      -ms-grid-row: 3;
      grid-row: 3;
      margin-bottom: 0;
      border-bottom: 1px solid $dark-grey;
      p {
        line-height: 1.9;
      }
    }


  }

  &__nav {
    -ms-grid-column: 1/-1;
    -ms-grid-columns: repeat(3, 1fr);
    grid-column: 1/-1;
    grid-template-columns: repeat(3, 1fr);
    display: -ms-grid;
    display: grid;
    padding-bottom: 2.6rem;
    border-bottom: 1px solid $dark-grey;
    @include breakpoint(desktop) {
      -ms-grid-row: 3;
      -ms-grid-column: 2;
      -ms-grid-columns: 1.3fr 1fr 5.8fr;
      grid-row: 3;
      grid-column: 2;
      grid-template-columns: 1.3fr 1fr 5.8fr;
      padding-bottom: 3.9rem;
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
      display: -ms-grid;
      display: grid;
      -ms-grid-column: 1/-1;
      -ms-grid-columns: repeat(3, 1fr);
      grid-column: 1/-1;
      grid-template-columns: repeat(3, 1fr);
      padding:4.8rem 0 3.3rem;
    }

    &__item1 {
      margin-bottom: 2.1rem;
      @include breakpoint(desktop) {
        -ms-grid-column: 3;
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
        -ms-grid-column: 1;
        -ms-grid-row: 1;
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
        -ms-grid-column: 2;
        -ms-grid-row: 1;
        grid-column: 2;
        grid-row: 1;
      }
    }

    &__item4 {
      color: #46474a;
      font-size: 1.2rem;
      line-height: 1.25;
      -ms-grid-column: 2;
      -ms-grid-row: 2;
      grid-column: 2;
      grid-row: 2;
    }
  }
}
</style>
