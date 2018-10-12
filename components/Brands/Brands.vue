<template>
  <article class="brands">

    <div class="container">

      <h2 class="brands-title">
        <span class="line-title" />OUR BRANDS
      </h2>

      <div class="brands__cards">

        <brand-card v-for="(data,index) in brandCards" :key="index" :data="data">
          <img slot="logo" :src="data.logo" :class="data.title + '-logo'" class="card-logo">
        </brand-card>

      </div>

    </div>

  </article>
</template>

<script>
import BrandCard from "~/components/Brands/BrandCard";

export default {
  components: {
    BrandCard
  },
  data() {
    return {
      brandCards: [
        {
          title: "yasmina",
          image: "images/brands/yasmina-bg.jpg",
          logo: "images/brands/yasmina-logo.svg",
          url: "https://www.yasmina.com/"
        },
        {
          title: "rajil",
          image: "images/brands/rajil-bg.jpg",
          logo: "images/brands/rajil-logo.svg",
          url: "https://www.rajil.com/"
        },
        {
          image: "no-pic"
        },
        {
          title: "threea2ilati",
          image: "images/brands/3a2ilati-bg.jpg",
          logo: "images/brands/3a2ilati-logo.svg",
          url: "https://www.3a2ilati.com/"
        },
        {
          title: "atyabtabkha",
          image: "images/brands/aty-bg.jpg",
          logo: "images/brands/aty-logo.svg",
          url: "https://www.atyabtabkha.com/"
        },
        {
          title: "warrini",
          image: "images/brands/warrini-bg.jpg",
          logo: "images/brands/warrini-logo.svg",
          url: "https://www.warrini.com/"
        }
      ]
    };
  }
};
</script>