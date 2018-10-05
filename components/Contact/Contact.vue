<template>
  <article class="contact">

    <div class="container">

      <h2 class="contact-title">
        <span class="line-title" />WHERE ARE WE 
      </h2>

      <div class="contact__cards">
        <contact-card 
          v-for="(card,index) in cards"
          :data="card"
          :key="index" />
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
      cards: [
        { city: "Dubai", adress: "Office Park, Building Block A Units A301-A302 Dubai Internet CityT:971 4-434 7147" },
        { city: "Beirut", adress: "Beirut Digital District/BDD 10752nd and 3rd floor Bechara El Khoury T: 961 1 - 660327F: 961 1 - 660153" },
        { city: "Belgrade", adress: "Office Park, Building Block AUnits A301-A302Dubai InternetityT:971 4-434 7147" }
      ]
    }
  }
};
</script>

<style scoped>
</style>