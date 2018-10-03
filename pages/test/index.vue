<template>
  <div class="container">

    <h2 class="brands-title">
      OUR BRANDS
    </h2>

    <article class="brands">

      <card2  
        data-image="https://picsum.photos/382/?image=10">
        <h3 slot="header">YASMINA</h3>
        <p slot="content">An online portal for inspiring sophisticated and discerning Arab women.We deliver the best experiences, tips and advice that match your lifestyle.</p>
      </card2>

      <card2  
        data-image="https://picsum.photos/382/?image=20">
        <h3 slot="header">RAJIL</h3>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure placeat adipisci praesentium ut, cupiditate vero voluptatem similique nemo qui fugit.</p>
      </card2>

      <card2  
        data-image="https://picsum.photos/382/?image=5">
        <h3 slot="header">3a2ilati</h3>
        <p slot="content">An online portal for inspiring sophisticated and discerning Arab women.We deliver the best experiences, tips and advice that match your lifestyle.</p>
      </card2>

      <card2  
        data-image="https://picsum.photos/382/?image=30">
        <h3 slot="header">arabsumth</h3>
        <p slot="content">An online portal for inspiring sophisticated and discerning Arab women.We deliver the best experiences, tips and advice that match your lifestyle.</p>
      </card2>

      <card2  
        data-image="https://picsum.photos/382/?image=40">
        <h3 slot="header">lorem</h3>
        <p slot="content">An online portal for inspiring sophisticated and discerning Arab women.We deliver the best experiences, tips and advice that match your lifestyle.</p>
      </card2>

    </article>
  </div>
</template>

<script>
import card2 from "~/components/test/card2";

export default {
  components: {
    card2
  }
};
</script>

<style lang="scss">
@import "~assets/scss/master.scss";

.brands {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

</style>