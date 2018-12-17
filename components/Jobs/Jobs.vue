<template>
  <div class="jobs">
    <div class="container l-container--grid">
      <h4 class="c-section__guide l-padded--left">jobs</h4>
      <h3 class="c-section__title l-padded--left jobs__title">Build the future with us.</h3>
      <p class="jobs__paragraph item3">
        We are always looking for motivated, multi-talented and organized people to join our diverse team! So if you want to be part of our team, check out open positions and apply today at
        <span
          class="text--bold"
        >posao@diwanee-serbia.com</span>
      </p>

      <div class="jobs__list item4">
        <JobsListItem class="jobs__list__item">
          <p slot="title" class="jobs__list__item-title">Frontend Developer</p>
          <p slot="hash" class="jobs__list__item-hash">#Html #CSS #SASS #JS</p>
          <nuxt-link slot="url" class="jobs__list__item-btn" tag="a" to="/work/fe/">VIEW MORE</nuxt-link>
        </JobsListItem>
        <JobsListItem class="jobs__list__item">
          <p slot="title" class="jobs__list__item-title">PHP Developer</p>
          <p slot="hash" class="jobs__list__item-hash">#PHP #MySQL #Git #Apache</p>
          <nuxt-link slot="url" class="jobs__list__item-btn" tag="a" to="/work/php/">VIEW MORE</nuxt-link>
        </JobsListItem>
        <JobsListItem class="jobs__list__item">
          <p slot="title" class="jobs__list__item-title">Web Designer</p>
          <p slot="hash" class="jobs__list__item-hash">#Zeplin #XD #Sketch #Illustrator</p>
          <nuxt-link slot="url" class="jobs__list__item-btn" tag="a" to="/work/">VIEW MORE</nuxt-link>
        </JobsListItem>
        <JobsListItem class="jobs__list__item">
          <p slot="title" class="jobs__list__item-title">Project Manager</p>
          <p slot="hash" class="jobs__list__item-hash">#Organization #Agile #Scrum #Kanban</p>
          <nuxt-link slot="url" class="jobs__list__item-btn" tag="a" to="/work/">VIEW MORE</nuxt-link>
        </JobsListItem>
      </div>
    </div>
  </div>
</template>

<script>
import JobsListItem from "~/components/Jobs/JobsListItem";
export default {
  components: {
    JobsListItem
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/master.scss";

.jobs {
  &__title {
    margin-bottom: 2.2rem;
  }
  &__paragraph {
    margin-bottom: 6.4rem;
  }
  &__list {
    &__item {
      display: flex;
      flex-direction: column;
      margin-bottom: 3.8rem;
      &-title {
        font-size: 1.8rem;
        line-height: 1.33;
        font-weight: 700;
      }
      &-hash {
        color: $warm-grey;
      }
      &-btn {
        color: $rouge;
      }
    }
  }
  // grid layout
  @include breakpoint(desktop) {
    .item3 {
      grid-column: 2/5;
      grid-row: 3;
    }
    .item4 {
      grid-column: 2/-1;
      grid-row: 4;
    }
  }
}
</style>