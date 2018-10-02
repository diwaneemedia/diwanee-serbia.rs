<template>
  <div class="about__stats-card">

    <h3 class="about__stats-card-title">
      <slot name="numbers">
        666
      </slot>
    </h3>

    <p class="about__stats-card-content">
      <slot name="text">
        we tha best
      </slot>
    </p>

  </div>
</template>

<script>
</script>

<style scoped>
</style>