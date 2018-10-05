<template>
  <article class="brands">

    <h2 class="brands-title">
      <span class="line-title" />OUR BRANDS
    </h2>

    <div class="brands__cards">

      <brand-card 
        v-for="(data,index) in brandCards" 
        :key="index"
        :data-image="data.image">
        <h4 slot="header">{{ data.header }}</h4>
        <p slot="content">{{ data.content }}</p>
      </brand-card>

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
        {image: "https://picsum.photos/382/?image=10", header: "Yasmina", content: "An online portal for inspiring sophisticated and discerning Arab women.We deliver the best experiences, tips and advice that match your lifestyle."},
        {image: "https://picsum.photos/382/?image=20", header: "Second", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eligendi impedit earum quod blanditiis repudiandae soluta molestiae rerum laborum est?"},
        {image: "no-pic", },
        {image: "https://picsum.photos/382/?image=45", header: "Fourth", content: "An online portal for inspiring sophisticated and discerning Arab women.We deliver the best experiences, tips and advice that match your lifestyle."},
        {image: "https://picsum.photos/382/?image=50", header: "Yasmina", content: "An online portal for inspiring sophisticated and discerning Arab women.We deliver the best experiences, tips and advice that match your lifestyle."},
        {image: "https://picsum.photos/382/?image=5", header: "Last", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit eligendi impedit earum quod blanditiis repudiandae soluta molestiae rerum laborum est?"}
      ]
    };
  }
};
</script>

<style scoped>
</style>