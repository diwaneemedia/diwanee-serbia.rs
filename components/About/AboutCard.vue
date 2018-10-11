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
export default {
  data() {
    return {
      observer: null
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit("intersect");
      }
    });
    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  }
};
</script>
