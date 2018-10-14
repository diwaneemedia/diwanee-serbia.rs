<template>
  <div class="jobs__list--underlay">

    <div class="jobs__list__offer container">

      <div class="col--left">
        <slot name="title" />
        <slot name="hash" />
      </div>

      <slot name="url" />

    </div>

  </div>
</template>
