<template>
  <div class="about__stats-numbers">

    <h3 class="about__stats-numbers-title">
      <slot name="numbers">
        666
      </slot>
    </h3>

    <p class="about__stats-numbers-content">
      <slot name="text">
        we tha best
      </slot>
    </p>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>