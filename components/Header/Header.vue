<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__top">
        <img class="logo" src="~/assets/images/diwanee-logo.svg" alt="logo">
        <nuxt-link class="contact-link" tag="a" to="/contact">Contact</nuxt-link>
        <Social class='header__social'/>
      </div>
      <div class="headings">
        <!-- <h1 class="headings__title">We are
          <br>Building
          <br>The future of
          <br>Digital media
        </h1>
        <h2
          class="headings__subtitle"
        >We are gamers, developers, designers, thinkers.</h2> -->
      </div>
    </div>
    <a href="/game" :class="{ active : ctaActive }" target="_blank" class="cta__game">
      <svg class="cta__game-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.02 54">
        <defs>
          <style>
            .cls-1 {
              fill: #c41230;
            }
            .cls-2 {
              fill: #fff;
            }
            .cls-3 {
              fill: #3b4570;
            }
            .cls-4 {
              fill: #3befbb;
            }
            .cls-5 {
              fill: #f67e76;
            }
            .cls-6 {
              fill: #ff3bec;
            }
            .cls-7 {
              fill: #5d94ff;
            }
          </style>
        </defs>
        <g id="icon" transform="translate(-1114 -287)">
          <circle
            id="Ellipse_1"
            cx="27"
            cy="27"
            r="27"
            class="cls-1"
            data-name="Ellipse 1"
            transform="translate(1114 287)"
          ></circle>
          <path
            id="Path_1179"
            d="M6 0h30c3.313 0 6 3.038 6 6.785v14.54a1.837 1.837 0 0 1-1.714 1.939s-10.567-3.076-18.058-3.17-9.739 6.179-15.152 5.886A7.36 7.36 0 0 1 0 18.417V6.785C0 3.038 2.686 0 6 0z"
            class="cls-2"
            data-name="Path 1179"
            transform="rotate(-22 1356.428 -2740.42)"
          ></path>
          <circle
            id="Ellipse_2"
            cx="4.5"
            cy="4.5"
            r="4.5"
            class="cls-3"
            data-name="Ellipse 2"
            transform="translate(1135 311)"
          ></circle>
          <g id="Group_1737" data-name="Group 1737" transform="translate(-5172 2560)">
            <circle
              id="Ellipse_3"
              cx="2"
              cy="2"
              r="2"
              class="cls-4"
              data-name="Ellipse 3"
              transform="translate(6327 -2260)"
            ></circle>
            <circle
              id="Ellipse_4"
              cx="2"
              cy="2"
              r="2"
              class="cls-5"
              data-name="Ellipse 4"
              transform="translate(6325 -2255)"
            ></circle>
            <circle
              id="Ellipse_5"
              cx="2"
              cy="2"
              r="2"
              class="cls-6"
              data-name="Ellipse 5"
              transform="translate(6332 -2258)"
            ></circle>
            <circle
              id="Ellipse_6"
              cx="2"
              cy="2"
              r="2"
              class="cls-7"
              data-name="Ellipse 6"
              transform="translate(6330 -2253)"
            ></circle>
          </g>
        </g>
      </svg>
      <p class="cta__game-text">
        <span class="bold">Hey you!</span> Play our latest
        game and have some fun.
      </p>
    </a>
    <Navigation/>
  </header>
</template>

<script>
import Navigation from "~/components/Navigation/Navigation.vue";
import Social from "~/components/UI/Social";
export default {
  components: {
    Navigation,
    Social
  },
  data() {
    return {
      ctaActive: false
    };
  },
  mounted() {
    // CTA Button
    this.ctaActive = true;
    $(window).on("scroll", this.ctaScrollHandler);
    let timer = setTimeout(function(){
      $(".cta__game").addClass("collapsed");
    }, 3000);
  },
  beforeDestroy(){
    $(window).off("scroll", this.ctaScrollHandler);
  },
  methods: {
    ctaScrollHandler: function(event){
      var ctaBtn = $(".cta__game");

      // height of button
      var ctaBtnHeight = ctaBtn.height();
      // top position
      var ctaBtnScrollTop = ctaBtn.offset().top;
      var headerHeight = $(".header").outerHeight();
      var windowScrollTop = $(window).scrollTop();
      if (windowScrollTop + ctaBtnScrollTop > headerHeight) {
        ctaBtn.addClass("collapsed");
         // document.body.scrollTop = 0;
      } 
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/master.scss";
.header {
  padding-top: 2.9rem;
  padding-bottom: 11.2rem;
  position: relative;
  background: center / cover no-repeat;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.3)
    ),
    url("~assets/images/header.png");
  @include breakpoint(desktop) {
    padding-top: 4rem;
    padding-bottom: 30rem;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.3)
      ),
      url("~assets/images/header--desk.jpg");
  }
  @include breakpoint(phone) {
    height: 100vh;
    overflow: hidden;
  }
  &__container.container {
    @include breakpoint(desktop) {
      width: 114rem;
    }
  }
  &__top {
    display: -ms-grid;
    display: grid;
    // justify-content: space-between;
    -ms-grid-columns: 80% 10% 10%;
    grid-template-columns: 80% 10% 10%;
    grid-template-areas:"a b c";

    align-items: center;
    color: $white;
    font-size: 1.8rem;
    line-height: 1.72;
    margin-bottom: 22.3rem;
    .logo {
      grid-area:a;
    }
    .contact-link {
      grid-area: b;
    }
    @include breakpoint(desktop) {
      margin-bottom: 19.37rem;
    }
  }
  .header__social {
    @include breakpoint(phone) {
      display: none;
    }
  }
  .social {
    justify-self: end;
    -ms-grid-row-align:end;
    margin: 0;
  }
  .social__btn {
    &.social__facebook {
      svg {
        width:7px;
        fill:white;
      }
    }
    &.social__twitter {
      svg {
        width: 17px;
        fill:white;
      }
    }
  }
}

.headings {
  color: $white;

  @include breakpoint(desktop) {
    padding-left: 12.6rem;
    padding-top: 26.4%;
  }

  &__title {
    font-size: 4.6rem;
    font-weight: bold;
    line-height: 1.07;
    margin-bottom: 1.2rem;
    @include breakpoint(desktop) {
      font-size: 5.6rem;
      line-height: 1.05;
      margin-bottom: 2.3rem;
    }
  }
  &__subtitle {
    font-size: 1.6rem;
    font-weight: 300;
    opacity: 0.6;
    line-height: 1.5;
    width: 31.2rem;

    @include breakpoint(desktop) {
      font-size: 1.6rem;
    }
  }
}

.logo,
.contact-link {
  width: 9rem;
  z-index: 2;
}
// had to add this cause it's gonna glitch without it,
// and I don't like it
.contact-link {
  position: absolute;
  right: 0;
  @include breakpoint(desktop) {
    position: static;
    width: auto;
    // float: right;
    display: block;
  }
}

// Call to action button

.cta__game {
  @include breakpoint(phone) {
    display: none;
  }
  display: flex;
  background-color: $white;
  align-items: center;
  position: fixed;
  top: 78%;
  right: -2px;
  border-radius: 2%;
  z-index: 3;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out 0.4s;
  &-icon {
    width: 6rem;
    margin: 1.5rem;
  }
  &-text {
    color: $steel;
    padding-right: 2.6rem;
    line-height: 1.22;
    font-size: 1.8rem;
    width: 21.4rem;
    opacity: 0;
    transition: opacity 0.4s ease-in-out 0.7s;
    span {
      font-weight: bold;
      color: $dark;
    }
  }
  &.active {
    transform: none;
    & .cta__game-text {
      opacity: 1;
    }
  }
  &.collapsed {
    transform: translateX(72%);
    box-shadow: -1px 1px 10px 0 rgba(36, 36, 36, 0.16);
    & .cta__game-text {
      transition: opacity 0.4s ease;
      opacity: 0;
    }
  }
  &:hover {
    transform: none;
    & .cta__game-text {
      opacity: 1;
    }
  }
}
</style>
