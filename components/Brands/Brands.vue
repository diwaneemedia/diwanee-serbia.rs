<template>
  <article class="brands">

    <div class="container">

      <h2 class="brands-title">
        <span class="line-title" />OUR BRANDS
      </h2>

      <div class="brands__cards">

        <a href="https://www.yasmina.com/">
          <div class="brand__card yasmina">
            <div class="brand__card-bg yasmina-bg" />
            <img class="card-logo yasmina-logo" src="~static/images/brands/yasmina-logo.svg" alt="yasmina logo">
          </div>
        </a>

        <a href="https://www.rajil.com/">
          <div class="brand__card rajil">
            <div class="brand__card-bg rajil-bg" />
            <img class="card-logo rajil-logo" src="~static/images/brands/rajil-logo.svg" alt="rajil logo">
          </div>
        </a>

        <div class="brands__card brands__card-text">
          <h3 class="brands__card-text-content"> With all our brands we have over 38 million fans across social channels.
          </h3>
        </div>

        <a href="https://www.3a2ilati.com/">
          <div class="brand__card threea2ilati">
            <div class="brand__card-bg threea2ilati-bg" />
            <img class="card-logo threea2ilati-logo" src="~static/images/brands/3a2ilati-logo.svg" alt="3a2ilati logo">
          </div>
        </a>

        <a href="https://www.atyabtabkha.com/">
          <div class="brand__card aty">
            <div class="brand__card-bg aty-bg" />
            <img class="card-logo aty-logo" src="~static/images/brands/aty-logo.svg" alt="aty logo">
          </div>
        </a>

        <a href="https://www.warrini.com/">
          <div class="brand__card warrini">
            <div class="brand__card-bg warrini-bg" />
            <img class="card-logo warrini-logo" src="~static/images/brands/warrini-logo.svg" alt="warrini logo">
          </div>
        </a>

      </div>

    </div>

  </article>
</template>

<style lang="scss" scoped>
@import "~assets/scss/master";
.brand__card {
  width: 100%;
  height: 33rem;
  opacity: 1;
  background: 50% 50% / cover no-repeat;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  @include breakpoint(desktop) {
    height: 38rem;
  }
  &-bg {
    height: 100%;
    opacity: 0.5;
  }
}
.card-logo {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.yasmina {
  background-color: #543a72;
  &-bg {
    background: center / cover url("~static/images/brands/yasmina-bg.jpg");
  }
  &-logo {
    width: 21.8rem;
    @include breakpoint(desktop) {
      width: 25.2rem;
    }
  }
}
.rajil {
  background-color: $dark;
  &-bg {
    background: center / cover url("~static/images/brands/rajil-bg.jpg");
  }
  &-logo {
    width: 12.2rem;
    @include breakpoint(desktop) {
      width: 14rem;
    }
  }
}
.threea2ilati {
  background-color: $black;
  &-bg {
    background: center / cover url("~static/images/brands/3a2ilati-bg.jpg");
  }
  &-logo {
    width: 12.8rem;
    @include breakpoint(desktop) {
      width: 14rem;
    }
  }
}
.aty {
  background-color: #fcde65;
  &-bg {
    background: center / cover url("~static/images/brands/aty-bg.jpg");
  }
  &-logo {
    width: 21.5rem;
    @include breakpoint(desktop) {
      width: 24.7rem;
    }
  }
}
.warrini {
  background-color: #f23a5e;
  &-bg {
    background: center / cover url("~static/images/brands/warrini-bg.jpg");
  }
  &-logo {
    width: 17.7rem;
    @include breakpoint(desktop) {
      width: 20.4rem;
    }
  }
}
</style>