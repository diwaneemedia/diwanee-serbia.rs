<template>
  <div class="social">
    <!-- facebook -->
    <div class="social__btn social__facebook">
      <a href="https://www.facebook.com/diwaneeserbia/" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.914 12.688">
          <path
            id="facebook-footer"
            d="M129.554 4.158V3.064a2.4 2.4 0 0 1 .023-.381.74.74 0 0 1 .1-.266.425.425 0 0 1 .262-.181 1.863 1.863 0 0 1 .481-.05h1.093V0h-1.748a2.845 2.845 0 0 0-2.179.72 3.032 3.032 0 0 0-.662 2.121v1.317h-1.309v2.186h1.309v6.344h2.626V6.344h1.75l.231-2.187z"
            class="cls-1"
            transform="translate(-125.619)"
          ></path>
        </svg>
      </a>
    </div>

    <!-- twitter -->
    <div class="social__btn social__twitter">
      <a href="https://twitter.com/diwaneeserbia" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.178 12.33">
          <path
            id="twitter-footer"
            d="M15.18 58.9a6.219 6.219 0 0 1-1.788.49 3.127 3.127 0 0 0 1.369-1.722 6.277 6.277 0 0 1-1.979.756 3.116 3.116 0 0 0-5.306 2.839 8.84 8.84 0 0 1-6.417-3.253 3.117 3.117 0 0 0 .964 4.156 3.114 3.114 0 0 1-1.41-.391v.039a3.117 3.117 0 0 0 2.5 3.053 3.154 3.154 0 0 1-.82.109 2.989 2.989 0 0 1-.586-.058 3.115 3.115 0 0 0 2.908 2.163 6.247 6.247 0 0 1-3.871 1.331A6.62 6.62 0 0 1 0 68.369a8.8 8.8 0 0 0 4.773 1.4 8.8 8.8 0 0 0 8.859-8.859l-.01-.4a6.218 6.218 0 0 0 1.558-1.61z"
            class="cls-1"
            transform="translate(-.002 -57.441)"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.social {
  display: flex;
  margin: 0 auto;
  justify-content: center;

  &__btn {
    cursor: pointer;
    margin: 0 0.8rem;
  }
}
.footer {
  svg {
    fill: #818391;
  }
  .social__facebook {
    width: 0.6rem;
  }
  .social__twitter {
    width: 1.6rem;
  }
}
.navigation {
  svg {
    fill: #ffffff;
  }
  .social__twitter {
    width: 2.5rem;
  }
  .social__facebook {
    width: 1rem;
  }
}
</style>
