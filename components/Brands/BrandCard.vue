<template>
  <div class="brands__card">

    <img 
      v-if="data != 'no-pic'" 
      :src="data" 
      alt="pic">
      
    <h3
      v-else 
      class="brands__card-text"> With all our brands we have over 38 million fans across social channels.
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
      default: function () {
        return { img: 'hello' }
      }
    }
  }
};
</script>

<style scoped>
</style>