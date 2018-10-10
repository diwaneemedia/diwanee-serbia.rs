<template>
  <div class="container animation">

    <h1 class="title">
      WE ARE BUILDING THE FUTURE OF DIGITAL MEDIA
    </h1>

    <div class="box">

      <svg class="vueconf-logo" viewBox="0 0 191 169" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <g id="VueConf-Logo">
          <path id="VueConf-Triangle-Green" d="M95.04,0l95.04,168l-190.08,0l95.04,-168Z" style="fill:#41b883;" />
          <path id="VueConf-Triangle-Blue" d="M95.04,67.95l61.624,100.05l-123.248,0l61.624,-100.05Z" style="fill:#35495e;" />
          <path id="VueConf-Triangle-White" d="M95.04,122.992l27.51,45.968l-55.02,0l27.51,-45.968Z" style="fill:#fff;" />
        </g>
      </svg>

      <svg v-if="showSun" :class="sunClass" viewBox="0 0 89 87" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <g id="Sun">
          <ellipse id="Sun-Circle-White" cx="44.28" cy="43.2" rx="44.28" ry="43.2" style="fill:#FDB813;" />
          <ellipse id="Sun-Circle-Green" cx="44.28" cy="43.2" rx="26.88" ry="26.224" style="fill:#fff;" />
        </g>
      </svg>

      <svg class="bush" viewBox="-5 -20 70 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <g id="Bush">
          <ellipse v-if="showBushCircleLeft" id="Bush-Circle-Left" :class="bushCircleLeftClass" cx="29.4" cy="28.32" rx="29.4" ry="28.32" style="fill:#41b883;" />
          <ellipse v-if="showBushCircleRight" id="Bush-Circle-Right" :class="bushCircleRightClass" cx="58.8" cy="38.76" rx="18.562" ry="17.88" style="fill:#c41230;" />
        </g>
      </svg>

      <svg class="tree-left" viewBox="0 -10 77 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <g id="Tree-Left">
          <rect v-if="showTreeLeftBase" id="Tree-Left-Base" :class="treeLeftBaseClass" x="33.171" y="42.234" width="10.32" height="104.766" style="fill:#35495e;" />
          <ellipse v-if="showTreeLeftCircleBottom" id="Tree-Left-Circle-Bottom" :class="treeLeftCircleBottomClass" cx="38.331" cy="59.367" rx="38.331" ry="36.122" style="fill:#41b883;" />
          <ellipse v-if="showTreeLeftCircleTop" id="Tree-Left-Circle-Top" :class="treeLeftCircleTopClass" cx="38.331" cy="23.245" rx="24.666" ry="23.245" style="fill:#41b883;" />
        </g>
      </svg>

      <svg class="tree-right" viewBox="0 -16 110 171" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
        <g id="Tree-Right">
          <rect v-if="showTreeRightBase" id="Tree-Right-Base" :class="treeRightBaseClass" x="49.615" y="54.96" width="10.32" height="115.2" style="fill:#35495e;" />
          <ellipse v-if="showTreeRightCircle" id="Tree-Right-Circle" :class="treeRightCircleClass" cx="54.775" cy="56.76" rx="54.775" ry="56.76" style="fill:#c41230;" />
        </g>
      </svg>
    </div>

  </div>
</template>

<script>
export default {
  data: () => ({
    //treeLeft stuff
    showTreeLeftBase: false,
    showTreeLeftCircleBottom: false,
    showTreeLeftCircleTop: false,
    treeLeftBaseClass: "",
    treeLeftCircleBottomClass: "",
    treeLeftCircleTopClass: "",
    //treeRight stuff
    showTreeRightBase: false,
    showTreeRightCircle: false,
    treeRightBaseClass: "",
    treeRightCircleClass: "",
    //bush stuff
    showBushCircleLeft: "",
    showBushCircleRight: "",
    bushCircleLeftClass: "",
    bushCircleRightClass: "",
    //sun stuff
    showSun: false,
    sunClass: "sun"
  }),
  created() {
    setTimeout(() => {
      this.toggleTreeLeftBase();
    }, 2000);
  },
  methods: {
    toggleTreeLeftBase: function() {
      this.showTreeLeftBase = true;
      this.treeLeftBaseClass = "growActive";
      setTimeout(() => {
        this.toggleTreeLeftCircleBottom();
        this.toggleTreeRightBase();
        this.toggleBushCircleLeft();
      }, 500);
    },
    toggleTreeLeftCircleBottom: function() {
      this.showTreeLeftCircleBottom = true;
      this.treeLeftCircleBottomClass = "growShrinkActive";
      setTimeout(() => {
        this.toggleTreeLeftCircleTop();
      }, 500);
    },
    toggleTreeLeftCircleTop: function() {
      this.showTreeLeftCircleTop = true;
      this.treeLeftCircleTopClass = "growShrinkActive";
    },
    toggleTreeRightBase: function() {
      this.showTreeRightBase = true;
      this.treeRightBaseClass = "growShrinkActive";
      setTimeout(() => {
        this.toggleTreeRightCircle();
      }, 500);
    },
    toggleTreeRightCircle: function() {
      this.showTreeRightCircle = true;
      this.treeRightCircleClass = "growShrinkActive";
      setTimeout(() => {
        this.toggleSun();
      }, 250);
    },
    toggleBushCircleLeft: function() {
      this.showBushCircleLeft = true;
      this.bushCircleLeftClass = "growShrinkActive";
      setTimeout(() => {
        this.toggleBushCircleRight();
      }, 250);
    },
    toggleBushCircleRight: function() {
      this.showBushCircleRight = true;
      this.bushCircleRightClass = "growShrinkActive";
    },
    toggleSun: function() {
      this.showSun = true;
      this.sunClass = "sun growShrinkActive";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/master.scss";

.animation {
  height: 40vw;
  position: relative;
}

.title {
  @include fontSizeVw(20,80);
  width: 50%;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 2;
  text-align: center;
  position: absolute;
  font-weight: 600;
  animation: fadeIn 5s 1;
  @include breakpoint(desktop) {
      width: 70%;
  }
}

.box {
  position: relative;
  height: 100%;
  margin: auto;
  width: 100%;
  display: block;
}

.vueconf-logo {
  position: absolute;
  height: 50%;
  width: 50%;
  top: 25%;
  left: 25%;
  animation: slideInBounce 1s 1, flip 0.5s 1s 1;
}

.sun {
  position: absolute;
  height: 20%;
  width: 30%;
  right: 20%;
  top: 10%;
}

.bush {
  position: absolute;
  height: 20%;
  width: 15%;
  right: 18%;
  bottom: 21%;
  //border: solid red 1px;
}

.tree-left {
  position: absolute;
  height: 25%;
  width: 20%;
  left: 5%;
  bottom: 25%;
}

.growActive {
  animation: grow 0.5s 1;
}

.growShrinkActive {
  animation: growShrink 0.5s 1;
}

.tree-right {
  position: absolute;
  height: 30%;
  width: 35%;
  left: 9%;
  bottom: 25%;
}

@keyframes fadeIn {
  0%,80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideInBounce {
  0% {
    transform: rotate(-180deg);
    top: -100%;
  }
  70% {
    transform: rotate(-180deg);
    top: 33%;
  }
  100% {
    transform: rotate(-180deg);
    top: 25%;
  }
}

@keyframes flip {
  0% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes grow {
  0% {
    transform: translatey(100%);
  }
  100% {
    transform: translatey(0%);
  }
}

@keyframes growShrink {
  0% {
    transform-origin: center;
    transform: scale(0);
  }
  50% {
    transform-origin: center;
    transform: scale(1.3);
  }
  100% {
    transform-origin: center;
    transform: scale(1);
  }
}
</style>