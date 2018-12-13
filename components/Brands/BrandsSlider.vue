<template>
  <div class="brands__slider">
    <div class="brands__slider__item aty">
      <div class="logo">
        <img src="~/assets/images/brands/aty-logo.png" alt="aty">
        Atyabtabkha
      </div>
    </div>
    <div class="brands__slider__item">
      <img src="~/assets/images/brands/object-picture1.png" alt="aty">
    </div>
    <div class="brands__slider__item">
      <img src="~/assets/images/brands/object-picture2.png" alt="aty">
    </div>
    <div class="brands__slider__item">
      <img src="~/assets/images/brands/object-picture3.png" alt="aty">
    </div>
    <div class="brands__slider__item">
      <img src="~/assets/images/brands/object-picture.png" alt="aty">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.brands__slider {
  // height: 56rem;
}
.brands__slider__item {
  position: relative;
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
  height: 56rem;
  width: 100%;
}
</style>
