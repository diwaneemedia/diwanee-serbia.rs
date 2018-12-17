<template>
  <div class="brands__slider__wrapper">
    <div class="brands__slider__border brands__slider__border--left"></div>
    <div class="brands__slider">
      <div class="brands__slider__item aty">
        <div class="logo">
          <img src="~/assets/images/brands/aty-logo.png" alt="aty">
          Atyabtabkha
        </div>
      </div>
      <div class="brands__slider__item threea2ilati">
        <div class="logo">
          <img src="~/assets/images/brands/3a2ilati-logo.png" alt="aty">
          3a2ilati
        </div>
      </div>
      <div class="brands__slider__item rajil">
        <div class="logo">
          <img src="~/assets/images/brands/rajil-logo.png" alt="aty">
          rajil
        </div>
      </div>
      <div class="brands__slider__item warrini">
        <div class="logo">
          <img src="~/assets/images/brands/warrini-logo.png" alt="aty">
          warrini
        </div>
      </div>
      <div class="brands__slider__item yasmina">
        <div class="logo">
          <img src="~/assets/images/brands/yasmina-logo.png" alt="aty">
          yasmina
        </div>
      </div>
    </div>
    <div class="brands__slider__border brands__slider__border--right"></div>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/master.scss";

.brands__slider__wrapper {
  @include breakpoint(desktop) {
    position: relative;
    margin: 0 auto;
    width: 142.4rem;
  }
}
.brands__slider__border {
  @include breakpoint(desktop) {
    position: absolute;
    background-color: white;
    width: 8.8rem;
    height: 54.4rem;
    z-index: 2;
    top: -4rem;
  }
}
.brands__slider__border--left {
  -webkit-box-shadow: 15px 0px 23px -9px rgba(139, 139, 139, 0.41);
  -moz-box-shadow: 15px 0px 23px -9px rgba(139, 139, 139, 0.41);
  box-shadow: 15px 0px 23px -9px rgba(139, 139, 139, 0.41);
}
.brands__slider__border--right {
  right: 0;
  -webkit-box-shadow: -15px 0px 23px -9px rgba(139, 139, 139, 0.41);
  -moz-box-shadow: -15px 0px 23px -9px rgba(139, 139, 139, 0.41);
  box-shadow: -15px 0px 23px -9px rgba(139, 139, 139, 0.41);
}

.brands__slider {
  @include breakpoint(desktop) {
    // margin: 0 auto;
  }
}
.brands__slider__item {
  position: relative;
  height: 56rem;
  background-size: cover;

  @include breakpoint(desktop) {
    height: 43em;
    margin: 0 1.2rem;
  }

  .logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    font-size: 1.6rem;
    line-height: 2.13;
    letter-spacing: 0.3px;
    img {
      margin: 0 auto;
    }
  }
}
.aty {
  background-image: linear-gradient(rgba(0, 0, 0, 0), #000000),
    url("~assets/images/brands/aty-bg.png");
}
.threea2ilati {
  background-image: linear-gradient(rgba(0, 0, 0, 0), #000000),
    url("~assets/images/brands/3a2ilati-bg.png");
}
.rajil {
  background-image: linear-gradient(rgba(0, 0, 0, 0), #000000),
    url("~assets/images/brands/rajil-bg.png");
}
.warrini {
  background-image: linear-gradient(rgba(0, 0, 0, 0), #000000),
    url("~assets/images/brands/warrini-bg.png");
}
.yasmina {
  background-image: linear-gradient(rgba(0, 0, 0, 0), #000000),
    url("~assets/images/brands/yasmina-bg.png");
}
</style>
