<template>
  <div>
    <h5 class="work-details-subheadings">
       {{title}}
    </h5>
    <ul class="work-details-description">
      <li v-for='list_item in list_items' :key='list_item'>
        {{list_item}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props:["title", "list_items"]
  }
</script>
