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
      <div class="brands__slider__item aty">
        <div class="logo">
          <img src="~/assets/images/brands/aty-logo.png" alt="aty">
          Atyabtabkha
        </div>
      </div>
      <div class="brands__slider__item aty">
        <div class="logo">
          <img src="~/assets/images/brands/aty-logo.png" alt="aty">
          Atyabtabkha
        </div>
      </div>
      <div class="brands__slider__item aty">
        <div class="logo">
          <img src="~/assets/images/brands/aty-logo.png" alt="aty">
          Atyabtabkha
        </div>
      </div>
      <div class="brands__slider__item aty">
        <div class="logo">
          <img src="~/assets/images/brands/aty-logo.png" alt="aty">
          Atyabtabkha
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
  @include breakpoint(desktop) {
    height: 43em;
    margin: 0 1.2rem;
  }

  .logo {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translateX(-50%);
    text-align: center;
    color: white;
    font-size: 1.6rem;
    line-height: 2.13;
    letter-spacing: 0.3px;
  }
}
.aty {
  background-image: linear-gradient(rgba(0, 0, 0, 0), #000000),
    url("~assets/images/brands/object-picture4.png");
  background-size: cover;
}
</style>
