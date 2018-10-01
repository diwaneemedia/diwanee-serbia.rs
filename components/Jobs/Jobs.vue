<template>
  <article class="jobs">

    <div class="container">

      <h2 class="jobs-title">
        — WORK WITH US
      </h2>

      <p class="jobs-content">
        We are always looking for motivated, multi-talented, and organized people to join our diverse team! So if you
        want to be part of our team, check out open positions and apply today at <span>posao@diwanee-serbia.com</span>
      </p>

    </div>

    <div class="jobs__list">
      <job-offer
        v-for="(job,index) in jobList"
        :key="index"
        :data="job" />
    </div>

  </article>
</template>

<script>
import JobOffer from "~/components/Jobs/JobOffer";

export default {
  components: {
    JobOffer
  },
  data() {
    return {
      jobList: [
        { name: "PHP DEVELOPER", hash: "#PHP #SQL #GIT #OOP" },
        { name: "JUNIOR PHP DEVELOPER", hash: "#PHP #SQL #GIT #OOP" },
        { name: "WEB DESIGNER", hash: "#Sketch #XD #Zeplin #Illustrator" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
