<template>
  <main>
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
            slidesToScroll: 1,
            autoplay: true
          }
        }
      ]
    });
    $(".slider-arrow-left").click(function() {
      $(".brands__slider").slick("slickPrev");
    });

    $(".slider-arrow-right").click(function() {
      $(".brands__slider").slick("slickNext");
    });
  }
};
</script>

<style lang="scss" >
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
</style>
