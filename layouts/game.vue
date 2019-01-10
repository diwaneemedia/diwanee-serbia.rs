<template>
  <nuxt/>
</template>
<script>
  export default {
    mounted(){
      window.SetNewScore = function(){
        console.log("cannot set score right now");
      }
    },
  }
