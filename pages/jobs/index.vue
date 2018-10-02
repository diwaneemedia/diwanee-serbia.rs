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
</script>

<style lang='scss' scoped>
@import "~assets/scss/master.scss";
.container {
  height: 100vh;
}
.test-cards {
  width: 80vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat((4, 1fr));
  grid-column-gap: 4rem;
}
.test-card {
  border: 5px solid $rouge;
  text-align: center;
  animation: move 4s infinite;
  cursor: pointer;

  &-title {
    font-size: 5rem;
    border: 2px solid blue;
    margin-bottom: 15rem;
  }

  &-content {
    font-size: 3rem;
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