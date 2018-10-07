<template>
  <article class="contact">

    <div class="container">

      <h2 class="contact-title">
        <span class="line-title" />WHERE ARE WE
      </h2>

      <div class="contact__cards">
        <contact-card v-for="(card,index) in cards" :data="card" :key="index" />
      </div>

    </div>

  </article>
</template>

<script>
  import ContactCard from "~/components/Contact/ContactCard.vue";

  export default {
    components: {
      ContactCard
    },
    data() {
      return {
        cards: [{
            city: "Dubai",
            adress: "Office Park, Building Block A Units A301-A302 ",
            adress2: "Dubai Internet City",
            phone: "T:971 4-434 7147"
          },
          {
            city: "Beirut",
            adress: "Beirut Digital District/BDD Bechara El Khoury",
            adress2: "1075 2nd and 3rd floor",
            phone: "T: 961 1 - 660327",
            fax: "F: 961 1 - 660153"
          },
          {
            city: "Belgrade",
            adress: "Resavska 23",
            adress2: "11000 Belgrade",
            phone: "T: 381 11 - 3340 117"
          }
        ]
      }
    }
  };

</script>

<style scoped>
</style>
