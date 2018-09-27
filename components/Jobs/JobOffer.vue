<template>
  <div class="jobs__list__offer">

    <div class="col--left">
      <p> {{ data.name }} </p>
      <span> {{ data.hash }} </span>
    </div>

    <div class="col--right">
      <nuxt-link 
        to="/jobs/" 
        tag="a"> VIEW MORE </nuxt-link>
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
        default: function () {
          return {
            job: 'dev'
          }
        }
      }
    }
  };

</script>

<style lang="scss" scoped>

  .jobs__list__offer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3.3rem 0;
  }

  .jobs__list__offer:nth-child(odd) {
    background: gray;
    width: 144rem;
    margin-left: -14.4rem;
    padding-left: 14.4rem;
  }

  .col--right {
    padding: 1.4rem 4.3rem;
    background-color: white;
    color: red;
  }

</style>
