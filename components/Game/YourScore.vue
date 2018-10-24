<template>
  <div id="signup">

    <div class="signup-form">

      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="name">name</label>
          <input id="name" v-model="name" type="name">
        </div>
        <div class="input">
          <label for="score">Your score</label>
          <p> {{ score }} </p>
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>

    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    score: {
      default: null,
      type: Number,
    }
  },
  data() {
    return {
      name: '',
    }
  },
  mounted() {

  },
  methods: {
    onSubmit() {
      const formData = {
      name: this.name,
      score: this.score
    }
    console.log(formData);
    axios.post("https://diwanee-serbia-game.firebaseio.com/users.json", formData)
    .then(res => console.log(res))
    .catch(error => console.log(error))
    }
  }
}

</script>

<style lang="scss" scoped>
@import "~assets/scss/master.scss";

  #signup {
    position: absolute;
    font-family: "Space-Invaders";
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 2.9rem;
    color: $black;
    z-index: 9999;
    // @include breakpoint(desktopLg) {

    // }
  }
  
  .signup-form {
    width: 40rem;
    font-size: 3rem;
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080, 0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    display: flex;
    flex-direction: column;
    text-align: center;
    label {
      padding: 5rem 3rem;
    }
    input {
      background-color: rgba($color: white, $alpha: 0.1);
      text-align: center;
      font-size: 3rem;
      color: white;
      padding: 2rem;
      border: 1px solid pink;
      border-bottom: 2px solid #fff;
      width: 80%;
      margin: 0 auto;
      }
  }

</style>
