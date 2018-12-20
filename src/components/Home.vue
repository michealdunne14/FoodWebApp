<template>
  <div class="hero">
    <h1 class="vue-title">Welcome to the Food App</h1>
    <p></p>
    <p class="lead"></p>
    <footer>
      <p>Posted by: Micheal Dunne</p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'User',
  // Data for user
  data () {
    return {
    }
  }
}
</script>

<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
  #password {
    margin-bottom: 25px;
  }
  #signup {
    margin-bottom: 25px;
  }
  #button {
    margin-bottom: 25px;
  }
</style>
