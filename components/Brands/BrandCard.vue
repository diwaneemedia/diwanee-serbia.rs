<template>
  <div
    v-if="data.image != 'no-pic'"
    ref="card" 
    class="card-wrap"
    @mousemove="handleMouseMove" 
    @mouseenter="handleMouseEnter" 
    @mouseleave="handleMouseLeave" >
    <div 
      :style="cardStyle"
      :class="data.title"
      class="card">
      <div 
        :style="cardBgImage"
        class="card-bg" />
      <div class="card-info">
        <slot name="logo" />
        <slot name="content" />
      </div>
    </div>
  </div>
  
  <div 
    v-else 
    class="brands__card brands__card-text">

    <h3  
      class="brands__card-text-content"> With all our brands we have over 38 million fans across social channels.
    </h3>

  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: function() {
        return {
          default: "https://picsum.photos/200/300"
        }
      }
    }
  },
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null,
  }),
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 7;
      const rY = this.mousePY * -7;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.data.image})`
      }
    }
  },
    updated() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width/2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height/2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(()=>{
        this.mouseX = 0;
        this.mouseY = 0;
      }, 500);
    }
  },
};
</script>

<style lang="scss">
@import "~assets/scss/master";

$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

.card-wrap {
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  
  &:hover {
    .card-info {
      transform: translateY(0);
    }
    .card-info p {
      opacity: 1;
    }
    .card-info, .card-info p {
      transition: 0.6s $hoverEasing;
    }
    .card-info:after {
      transition: 5s $hoverEasing;
      opacity: 1;
      transform: translateY(0);
    }
    .card-bg {
      transition: 
        0.6s $hoverEasing,
        opacity 5s $hoverEasing;
      opacity: 0.8;
    }
    .card {
      transition:
        0.6s $hoverEasing,
        box-shadow 2s $hoverEasing;
      box-shadow:
        rgba(white, 0.2) 0 0 20px 2.5px,
        rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.3) 0 15px 30px 0;
    }
  }
}

.card {
  position: relative;
  width: 100%;
  height: 33rem;
  overflow: hidden;
  box-shadow:
    rgba(black, 0.3) 0 15px 30px 0;
  transition: 1s $returnEasing;
  @include breakpoint(desktop) {
      height: 38rem;      
  }
}

.card-bg {
  opacity: 0.2;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition:
    1s $returnEasing,
    opacity 5s 1s $returnEasing;
  pointer-events: none;
}

.card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  
  p {
    opacity: 0;
    font-size: 1.6rem;
    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  
  * {
    position: relative;
    z-index: 1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, transparent 0%, rgba(#000, 0.6) 100%);
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s $returnEasing;
  }
}

// .card-info h4 {
//     @include fontSizeVw(30, 40);
//     line-height: 2;
//   text-align: center;
//   font-weight: 700;
//   text-shadow: rgba(black, 0.5) 0 10px 10px;
// }

.card-logo {
  margin: 0 auto 5rem;
}

.yasmina {
  background-color: #543a72;
  &-logo {
    width: 21.8rem;
  }
}
.rajil {
  background-color: $dark;
  &-logo {
    width: 12.2rem;
  }
}
.threea2ilati {
  background-color: $black;
  &-logo {
    width: 12.8rem;
  }
}
.aty {
  background-color: #fcde65;
  &-logo {
    width: 21.5rem;
  }
}
.warrini {
  background-color: #f23a5e;
  &-logo {
    width: 17.7rem;
  }
}

</style>