<template>
  <div class="jobs__list--underlay">

    <div class="jobs__list__offer container">

      <div class="col--left">
        <p class="col--left-title" > {{ data.name }} </p>
        <span class="col--left-hash" > {{ data.hash }} </span>
      </div>

      <nuxt-link
        :to="'/work/'+ data.url + '/' " 
        tag="a" 
        class="col--right btn">
        VIEW MORE
      </nuxt-link>

    </div>

  </div>
</template>

<script>
export default {
  name: "JobOffer",
  props: {
    data: {
      type: Object,
      required: true,
      default: function() {
        return {
          job: "dev"
        };
      }
    }
  }
};
</script>
