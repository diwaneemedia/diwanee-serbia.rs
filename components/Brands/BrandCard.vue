<template>
  <div>
    <slot name="bg" />
    <slot name="logo" />
  </div>
</template>

<script>
// export default {
//   data: () => ({
//     width: 0,
//     height: 0,
//     mouseX: 0,
//     mouseY: 0,
//     mouseLeaveDelay: null
//   }),
//   computed: {
//     mousePX() {
//       return this.mouseX / this.width;
//     },
//     mousePY() {
//       return this.mouseY / this.height;
//     },
//     cardStyle() {
//       const rX = this.mousePX * 7;
//       const rY = this.mousePY * -7;
//       return {
//         transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
//       };
//     }
//   },
//   mounted() {
//     this.width = this.$refs.card.offsetWidth;
//     this.height = this.$refs.card.offsetHeight;
//   },
//   methods: {
//     handleMouseMove(e) {
//       this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
//       this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
//     },
//     handleMouseEnter() {
//       clearTimeout(this.mouseLeaveDelay);
//     },
//     handleMouseLeave() {
//       this.mouseLeaveDelay = setTimeout(() => {
//         this.mouseX = 0;
//         this.mouseY = 0;
//       }, 300);
//     }
//   }
// };
</script>

<style lang="scss">
@import "~assets/scss/master";

// $hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
// $returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

// .card {
//   position: relative;
//   width: 100%;
//   height: 33rem;
//   overflow: hidden;
//   box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
//   -webkit-transition: all 0.3s ease-in-out;
//   transition: 1s $returnEasing;
//   @include breakpoint(desktop) {
//     height: 38rem;
//   }
// }

// .card-bg {
//   opacity: 0.5;
//   position: absolute;
//   width: 101%;
//   height: 101%;
//   padding: 20px;
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   -webkit-transition: all 0.3s ease-in-out;
//   transition: 1s $returnEasing, opacity 5s 1s $returnEasing;
//   pointer-events: none;
// }
// .card-logo {
//   margin: 0 auto 5rem;
// }

// .yasmina {
//   background-color: #543a72;
//   &-logo {
//     width: 21.8rem;
//     @include breakpoint(desktop) {
//       width: 25.2rem;
//     }
//   }
// }
// .rajil {
//   background-color: $dark;
//   &-logo {
//     width: 12.2rem;
//     @include breakpoint(desktop) {
//       width: 14rem;
//     }
//   }
// }
// .threea2ilati {
//   background-color: $black;
//   &-logo {
//     width: 12.8rem;
//     @include breakpoint(desktop) {
//       width: 14rem;
//     }
//   }
// }
// .atyabtabkha {
//   background-color: #fcde65;
//   &-logo {
//     width: 21.5rem;
//     @include breakpoint(desktop) {
//       width: 24.7rem;
//     }
//   }
// }
// .warrini {
//   background-color: #f23a5e;
//   &-logo {
//     width: 17.7rem;
//     @include breakpoint(desktop) {
//       width: 20.4rem;
//     }
//   }
// }
</style>