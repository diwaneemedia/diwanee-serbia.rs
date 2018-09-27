<template>
  <article class="brands">

    <h2 class="brands-title">
      — OUR BRANDS
    </h2>

    <div class="brands__cards">
      <brand-card 
        v-for="(img,index) in brandCards" 
        :key="index" 
        :data="img" />
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
        "https://picsum.photos/382/?image=10",
        "https://picsum.photos/382/?image=20",
        "no-pic",
        "https://picsum.photos/382/?image=15",
        "https://picsum.photos/382/?image=45",
        "https://picsum.photos/382/?image=50"
      ]
    };
  }
};
</script>

<style scoped>
</style>