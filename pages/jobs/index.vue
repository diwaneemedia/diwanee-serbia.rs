<template>
  <div class="container">

    <div class="test-cards">

      <div class="test-card">

        <h3 class="test-card-title">
          <slot name="numbers">
            666
          </slot>
        </h3>

        <p class="test-card-content">
          <slot name="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quasi.
          </slot>
        </p>

      </div>

      <div class="test-card">

        <h3 class="test-card-title">
          <slot name="numbers">
            666
          </slot>
        </h3>

        <p class="test-card-content">
          <slot name="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quasi.
          </slot>
        </p>

      </div>

      <div class="test-card">

        <h3 class="test-card-title">
          <slot name="numbers">
            666
          </slot>
        </h3>

        <p class="test-card-content">
          <slot name="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quasi.
          </slot>
        </p>

      </div>

      <div class="test-card">

        <h3 class="test-card-title">
          <slot name="numbers">
            666
          </slot>
        </h3>

        <p class="test-card-content">
          <slot name="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, quasi.
          </slot>
        </p>

      </div>

    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
@import "~assets/scss/master.scss";
.test-cards {
  height: 100vh;
  display: grid;
  grid-column-gap: 4rem;
  @include breakpoint(desktop) {
    grid-template-columns: repeat((4, 1fr));
  }
}
.test-card {
  border: 5px solid $rouge;
  text-align: center;
  animation: move 4s infinite;
  cursor: pointer;
  margin-bottom: 2rem;

  &-title {
    @include fontSizeVw(20,45);
    border: 2px solid blue;
    margin-bottom: 15rem;
  }

  &-content {
    font-size: 3rem;
    @include fontSizeVw(16,30);
  }
}

@keyframes move {
  0%,
  100% {
    transform: translateY(100px);
  }
  50% {
    transform: translateY(50px);
  }
}
</style>