<template lang="html">

    <div class='side__navigation'>
      <h3 class="jobs__header">Jobs</h3>
      <div class="job" v-for="job in jobs" v-bind:key="job.id">
       <nuxt-link slot="url" class="jobs__list__item-btn" tag="a" :to="'/work/' + job.id">
        <h4 class="jobs__title">{{job.title}}</h4>
        <ul class="job__tags">
          <li class="job__tag" >{{job.tags}}</li>
        </ul>
        </nuxt-link>
      </div>
    </div>


</template>

<script>
export default {

  mounted(){
    if ($(window).width()>=1024){
      this.stickyInit();
    }
  },
  beforeDestroy(){
    this.sticky.destroy();
  },
  methods: {
    stickyInit(){
      let $ = jQuery;
      require("diwanee-sticky/diwanee-sticky.js");
      this.sticky = $(".side__navigation").dwSticky({$stEnd: $(".footer")});
    }
  },
  data() {
    return {
       sticky: false,
       jobs: [
         {
           id: "php",
           title: "PHP Developer",
           tags:"#PHP #MySql"
         },
         {
           id: "js",
           title: "JS Developer",
           tags:"#FE #JS #Vue/React/Angular"
         }
         // {
         //   id: "web",
         //   title: "Web Designer",
         //   tags:"#PHP #MySql"
         // },
         // {
         //   id: "pm",
         //   title: "Project Manager",
         //   tags:"#PHP #MySql"
         // }
       ],

    }
  },

}
</script>

<style scoped lang="scss">
@import "~/assets/scss/master.scss";
.side__navigation {
  min-width: 210px;
  max-width: 293px;
  padding-top: 25rem;
  margin-bottom: 50px;
  @include breakpoint(phone) {
    padding-top:0;
  }
}
.job {
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    .jobs__title {
      color:#c41230;

      transform:scale(1.0051);
      transition: all 300ms;
    }
  }
}
.jobs__title {
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: var(--rouge);
  margin-bottom: -0.8rem;
}
.jobs__header {
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: var(--dark);
  text-transform: uppercase;
  margin-bottom: 2.7rem;
}
.job__tag {
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color:#767676;
}
</style>
