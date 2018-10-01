<template>
  <nav role="navigation">
    <div class="container navigation">

      <div class="navigation__logo">
        <img 
          src="~/static/images/diwanee-logo.png" 
          alt="logo">
      </div>

      <!-- Desk version -->

      <ul class="navigation__links navigation__links--desk">
        <li class="navigation__links-item"><a href="#">home</a></li>
        <li class="navigation__links-item"><a href="#">about</a></li>
        <li class="navigation__links-item"><a href="#">our brands</a></li>
        <li class="navigation__links-item"><a href="#">jobs</a></li>
        <li class="navigation__links-item"><a href="#">contact</a></li>
      </ul>

      <!-- Mobile version -->

      <div class="navigation__links--mob">

        <div 
          class="hamburger"
          @click="openSidebar">
          
          <div 
            :class="{ change : sideBarOpen }"
            class="hamburger__bar hamburger__bar1" />
          <div
            :class="{ change : sideBarOpen }" 
            class="hamburger__bar hamburger__bar2" />
          <div
            :class="{ change : sideBarOpen }"
            class="hamburger__bar hamburger__bar3" />
          
        </div>
        
        <ul class="navigation__links">
          <li class="navigation__links-item"><a href="#">home</a></li>
          <li class="navigation__links-item"><a href="#">about</a></li>
          <li class="navigation__links-item"><a href="#">our brands</a></li>
          <li class="navigation__links-item"><a href="#">jobs</a></li>
          <li class="navigation__links-item"><a href="#">contact</a></li>
        </ul>
      
      </div>
      
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        sideBarOpen: false,
      }
    },
    methods: {
      openSidebar() {
        this.sideBarOpen = !this.sideBarOpen;
      }
    }
  };

</script>

<style lang="scss" scoped>
@import "~assets/scss/master.scss";

.navigation__links--desk {
  display: none;
  @include breakpoint(desktop) {
    display: block;
  }
}

.navigation__links--mob {
  width: 2rem;
  @include breakpoint(desktop) {
    display: none;
  }
}
  
.hamburger__bar1, .hamburger__bar2, .hamburger__bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
}

.change.hamburger__bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
}

.change.hamburger__bar2 {opacity: 0;}

.change.hamburger__bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
}

</style>
