<template>
  <div class="brands__slider__wrapper">
    <div class="brands__slider__border brands__slider__border--left"></div>
    <div class="brands__slider">
      <a href="https://www.atyabtabkha.com/" target="_blank">
        <div class="brands__slider__item aty">
          <div class="logo">
            <img src="~/assets/images/brands/aty-logo.png" alt="aty">
            Atyabtabkha
          </div>
        </div>
      </a>
      <a href="https://www.3a2ilati.com/" target="_blank">
        <div class="brands__slider__item threea2ilati">
          <div class="logo">
            <img src="~/assets/images/brands/3a2ilati-logo.png" alt="aty">
            3a2ilati
          </div>
        </div>
      </a>
      <a href="https://www.rajil.com/" target="_blank">
        <div class="brands__slider__item rajil">
          <div class="logo">
            <img src="~/assets/images/brands/rajil-logo.png" alt="aty">
            rajil
          </div>
        </div>
      </a>
      <a href="https://www.warrini.com/" target="_blank">
        <div class="brands__slider__item warrini">
          <div class="logo">
            <img src="~/assets/images/brands/warrini-logo.png" alt="aty">
            warrini
          </div>
        </div>
      </a>
      <a href="https://www.yasmina.com/" target="_blank">
        <div class="brands__slider__item yasmina">
          <div class="logo">
            <img src="~/assets/images/brands/yasmina-logo.png" alt="aty">
            yasmina
          </div>
        </div>
      </a>
    </div>
    <div class="brands__slider__border brands__slider__border--right"></div>
    <svg
      class="slider-arrow slider-arrow-left"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 83 16.479"
    >
      <g id="arrow-active">
        <g id="right-arrow-forward">
          <g id="arrow-forward" transform="translate(40 -0.2)">
            <path
              id="Path_1178"
              d="M8.24 0L6.8 1.442l5.765 5.768H0v2.06h12.565L6.8 15.037l1.44 1.442 8.24-8.24z"
              data-name="Path 1178"
            ></path>
          </g>
        </g>
        <path
          class="animate-me"
          d="M 0,8 H40"
          data-name="Path 1180"
          stroke="black"
          stroke-width="2px"
        ></path>
      </g>
    </svg>
    <svg
      class="slider-arrow slider-arrow-right"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 83 16.479"
    >
      <g id="arrow-active">
        <g id="right-arrow-forward">
          <g id="arrow-forward" transform="translate(40 -0.2)">
            <path
              id="Path_1178"
              d="M8.24 0L6.8 1.442l5.765 5.768H0v2.06h12.565L6.8 15.037l1.44 1.442 8.24-8.24z"
              data-name="Path 1178"
            ></path>
          </g>
        </g>
        <path
          class="animate-me"
          d="M 0,8 H40"
          data-name="Path 1180"
          stroke="black"
          stroke-width="2px"
        ></path>
      </g>
    </svg>
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
// those bordery thingies
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

.brands__slider__item {
  position: relative;
  height: 56rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

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
    @include breakpoint(desktop) {
      top: 70%;
      opacity: 0;
      transition: all 300ms ease-in-out;
    }

    img {
      margin: 0 auto;
    }
  }
  &:hover,
  :active {
    @include breakpoint(desktop) {
      .logo {
        opacity: 1;
        top: 50%;
      }
    }
  }
}

// slick arrow customization
.slider-arrow {
  fill: black;
  position: absolute;
  bottom: -5rem;
  right: 25.6rem;
  width: 8.3rem;
  cursor: pointer;
  &:hover {
    .animate-me {
      stroke-dashoffset: 0;
    }
  }
}
.slider-arrow-left {
  transform: rotateY(180deg);
  right: 43rem;
}
.animate-me {
  stroke-dasharray: 100;
  stroke-dashoffset: -40;
  transition: all 200ms ease-in;
}

// Individual slider items
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
  img {
    width: 5.5rem;
  }
}
.warrini {
  background-image: linear-gradient(rgba(0, 0, 0, 0), #000000),
    url("~assets/images/brands/warrini-bg.png");
  img {
    width: 5.5rem;
  }
}
.yasmina {
  background-image: linear-gradient(rgba(0, 0, 0, 0), #000000),
    url("~assets/images/brands/yasmina-bg.png");
  img {
    width: 5.5rem;
  }
}
</style>
