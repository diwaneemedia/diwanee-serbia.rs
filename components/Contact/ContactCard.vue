<template>
  <div class="contact__card">
    <h5 class="contact__card-title" >
      {{ data.city }}
    </h5>
    <p class="contact__card-content">
      {{ data.adress }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ContactCard",
  props: {
    data: {
      type: Object,
      required: true,
      default: function () {
        return { city: 'Belgrade' }
      }
    }
  }
};
</script>

<style scoped>
</style>