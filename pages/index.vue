<template>
  <main>
    <div class="container l-container--grid l-container--grid--main">
      <div class="l-container--grid__item"></div>
      <div class="l-container--grid__item"></div>
      <div class="l-container--grid__item"></div>
      <div class="l-container--grid__item"></div>
      <div class="l-container--grid__item"></div>
      <div class="l-container--grid__item last"></div>
    </div>
    <Header id="header--hp"/>
    <About id="about--hp"/>
    <Brands id="brands--hp"/>
    <Audience id="audience--hp"/>
    <Jobs id="jobs--hp"/>
  </main>
</template>

<script>
import Header from "~/components/Header/Header.vue";
import About from "~/components/About/About.vue";
import Brands from "~/components/Brands/Brands.vue";
import Audience from "~/components/Audience/Audience.vue";
import Jobs from "~/components/Jobs/Jobs.vue";
export default {
  components: {
    Header,
    About,
    Brands,
    Audience,
    Jobs
  },
  mounted() {
    // Init Slick

    $(".brands__slider").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    // var resize_timeout;
    // $(window).resize(function() {
    //   clearTimeout(resize_timeout);
    //   resize_timeout = setTimeout(function() {
    //     gridRelocate();
    //   }, 300);
    // });

    // function gridRelocate() {
    //   var width = $(window).width(),
    //     grid_width = 2800,
    //     left = (width - grid_width) / 2;
    //   $(".b-grid__holder").css({ left: left + "px" }, 400);
    // }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/master.scss";

#header--hp {
  margin-bottom: 5rem;
}
#about--hp {
  margin-bottom: 12.4rem;
}
#brands--hp {
  margin-bottom: 11.4rem;
}
#audience--hp {
  margin-bottom: 16.8rem;
}
#jobs--hp {
  margin-bottom: 10.2rem;
  @include breakpoint(desktop) {
    margin-bottom: 15rem;
  }
}
.l-container--grid--main {
  position: absolute;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

// .b-grid__holder {
//   position: absolute;
//   top: 0;
//   height: 100%;
//   width: 2800px;
//   transition: all 0.3s ease;
//   z-index: -1;
// }
// .b-grid__line {
//   width: 200px;
//   float: left;
//   border-right: 1px solid #eee;
//   height: 100%;
// }
</style>
