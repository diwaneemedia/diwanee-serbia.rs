<template>
  <div 
    v-if="data != 'no-pic'" 
    class="brands__card">

    <img
      :src="data"
      alt="pic">
  </div>

  <div 
    v-else 
    class="brands__card brands__card-text">

    <h3  
      class="brands__card-text-content"> With all our brands we have over 38 million fans across social channels.
    </h3>

  </div>
</template>

<script>
export default {
  name: "BrandCard",
  props: {
    data: {
      type: String,
      required: true,
      default: function() {
        return { img: "hello" };
      }
    }
  }
};
</script>

<style scoped>
</style>