<template>
  <div 
    v-if="data.image != 'no-pic'" 
    ref="card" class="card-wrap" 
    @mousemove="handleMouseMove" 
    @mouseenter="handleMouseEnter" 
    @mouseleave="handleMouseLeave">
    <div 
      :style="cardStyle" 
      :class="data.title" class="card">
      <div 
        :style="cardBgImage" 
        class="card-bg" />
        
      <div class="card-info">
        <slot name="logo" />
      </div>

    </div>
  </div>

  <div v-else class="brands__card brands__card-text">

    <h3 class="brands__card-text-content"> With all our brands we have over 38 million fans across social channels.
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
        };
      }
    }
  },
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null
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
      };
    }
  },
  updated() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 500);
    }
  }
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
    .card-info {
      transition: 0.6s $hoverEasing;
    }
    .card-bg {
      transition: 0.6s $hoverEasing, opacity 5s $hoverEasing;
      opacity: 0.9;
    }
    .card {
      transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;
      box-shadow: 
        rgba(white, 0.2) 0 0 20px 2.5px,
        rgba(white, 1) 0 0 0 1px,
        rgba(0,0,0, 0.2) 0 10px 20px 0;
    }
  }
}

.card {
  position: relative;
  width: 100%;
  height: 33rem;
  overflow: hidden;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  transition: 1s $returnEasing;
  @include breakpoint(desktop) {
    height: 38rem;
  }
}

.card-bg {
  opacity: 0.5;
  position: absolute;
  width: 101%;
  height: 101%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s $returnEasing, opacity 5s 1s $returnEasing;
  pointer-events: none;
}

.card-info {
  padding: 20px;
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  color: #fff;
  transform: translateY(20%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.card-logo {
  margin: 0 auto 5rem;
}

.yasmina {
  background-color: #543a72;
  &-logo {
    width: 21.8rem;
    @include breakpoint(desktop) {
      width: 25.2rem;
    }
  }
}
.rajil {
  background-color: $dark;
  &-logo {
    width: 12.2rem;
    @include breakpoint(desktop) {
      width: 14rem;
    }
  }
}
.threea2ilati {
  background-color: $black;
  &-logo {
    width: 12.8rem;
    @include breakpoint(desktop) {
      width: 14rem;
    }
  }
}
.aty {
  background-color: #fcde65;
  &-logo {
    width: 21.5rem;
    @include breakpoint(desktop) {
      width: 24.7rem;
    }
  }
}
.warrini {
  background-color: #f23a5e;
  &-logo {
    width: 17.7rem;
    @include breakpoint(desktop) {
      width: 20.4rem;
    }
  }
}
</style>