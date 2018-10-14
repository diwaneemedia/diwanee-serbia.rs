<template>
  <article class="contact">

    <div class="container">

      <h2 class="contact-title">
        <span class="line-title" />WHERE ARE WE
        <svg class="contact-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.384 24">
          <g id="pointer" transform="translate(-70.574)">
            <g id="Group_210" data-name="Group 210" transform="translate(70.573)">
              <path id="Path_47" d="M79.265 0a8.7 8.7 0 0 0-8.692 8.692c0 5.948 7.778 14.68 8.11 15.049a.783.783 0 0 0 1.165 0c.331-.369 8.11-9.1 8.11-15.049A8.7 8.7 0 0 0 79.265 0zm0 13.065a4.373 4.373 0 1 1 4.373-4.373 4.378 4.378 0 0 1-4.373 4.373z"
                    class="cls-2" data-name="Path 47" transform="translate(-70.573)" />
            </g>
          </g>
        </svg>
      </h2>

      <div class="contact__cards">

        <contact-card>
          <template slot="city">Dubai</template>
          <template slot="adress">Office Park, Building Block A Units A301-A302</template>
          <template slot="adress2">Dubai Internet City</template>
          <template slot="phone">T:971 4-434 7147</template>
        </contact-card>

        <contact-card>
          <template slot="city">Beirut</template>
          <template slot="adress">Beirut Digital District/BDD Bechara El Khoury</template>
          <template slot="adress2">1075 2nd and 3rd floor</template>
          <template slot="phone">T: 961 1 - 660327</template>
          <template slot="fax">F: 961 1 - 660153</template>
        </contact-card>

        <contact-card>
          <template slot="city">Belgrade</template>
          <template slot="adress">Resavska 23</template>
          <template slot="adress2">11000 Belgrade</template>
          <template slot="phone">T: 381 11 - 3340 117</template>
        </contact-card>

      </div>

    </div>

  </article>
</template>

<script>
  import ContactCard from "~/components/Contact/ContactCard.vue";

  export default {
    components: {
      ContactCard
    }
  };

</script>