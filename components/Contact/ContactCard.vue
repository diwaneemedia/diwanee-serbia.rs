<template>
  <div class="contact__card">
    <h5 class="contact__card-title">
      <slot name="city" />
    </h5>
    <p class="contact__card-content">
      <slot name="adress"/>
      <br>
      <slot name="adress2"/>
      <br>
      <slot name="phone"/>
      <br>
      <slot name="fax"/>
    </p>
  </div>
</template>