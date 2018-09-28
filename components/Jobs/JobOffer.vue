<template>
  <div class="jobs__list--underlay">

    <div class="jobs__list__offer container">

      <div class="col--left">
        <p> {{ data.name }} </p>
        <span> {{ data.hash }} </span>
      </div>

      <div class="col--right btn">
        <nuxt-link 
          to="/jobs/" 
          tag="a"> VIEW MORE </nuxt-link>
      </div>

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
