<template>
  <main>
    <!-- <div class="b-grid__holder">
      <div class="b-grid__line"></div>
      <div class="b-grid__line"></div>
      <div class="b-grid__line"></div>
      <div class="b-grid__line"></div>
      <div class="b-grid__line"></div>
      <div class="b-grid__line"></div>
      <div class="b-grid__line"></div>
      <div class="b-grid__line"></div>
      <div class="b-grid__line"></div>
      <div class="b-grid__line"></div>
      <div class="b-grid__line"></div>
      <div class="b-grid__line"></div>
      <div class="b-grid__line"></div>
      <div class="b-grid__line"></div>
    </div>-->
    <Header class="header--hp" />
    <About class="about--hp" />
    <Brands class="brands--hp" />
    <Audience class="audience--hp" />
    <Jobs class="jobs--hp" />
    <Footer class="footer--hp" />
  </main>
</template>

<script>
import Header from "~/components/Header/Header.vue";
import About from "~/components/About/About.vue";
import Brands from "~/components/Brands/Brands.vue";
import Audience from "~/components/Audience/Audience.vue";
import Jobs from "~/components/Jobs/Jobs.vue";
import Footer from "~/components/Footer/Footer.vue";
export default {
  components: {
    Header,
    About,
    Brands,
    Audience,
    Jobs,
    Footer
  },
  mounted() {
    window.UnityFinished = function() {
      /// Unity finished loading event
      let game = document.getElementById("game");
      let loadingText = document.getElementById("loading-text");
      loadingText.classList.add("loaded");
      game.classList.add("loaded");
      console.log("Unity Done");
    };

    // Init Slick

    $(".your-class").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
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
.header--hp {
  margin-bottom: 5rem;
}
.about--hp {
  margin-bottom: 12.4rem;
}
.brands--hp {
  margin-bottom: 11.4rem;
}
.audience--hp {
  margin-bottom: 16.8rem;
}
.b-grid__holder {
  position: absolute;
  top: 0;
  height: 100%;
  width: 2800px;
  transition: all 0.3s ease;
  z-index: -1;
}
.b-grid__line {
  width: 200px;
  float: left;
  border-right: 1px solid #eee;
  height: 100%;
}
</style>
