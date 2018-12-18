<template>
  <div class="hero">
      <div class="centerx">
        <vs-button @click="popup=true" color="blue" type="filled">Login</vs-button>
        <vs-popup title="Login/SignUp" :active.sync="popup">
          <div class="centerx icons-example">
            <vs-input label-placeholder="icon-after" placeholder="UserName"/>
            <vs-input id="password" label-placeholder="icon-after" placeholder="Password"/>
            <vs-button id="button" color="blue" type="filled">Login</vs-button>
          </div>
          <div>
                <div slot="header">
                  Sign Up
                </div>
                <div class="centerx">
                  <vs-input label-placeholder="icon-after" placeholder="UserName" v-model.trim="authName"/>
                  <vs-input id="signup" label-placeholder="icon-after" placeholder="Password" v-model.trim="authPassword"/>
                  <vs-button color="blue" @submit.prevent="submitUser" type="filled">Sign Up</vs-button>
                </div>
          </div>
        </vs-popup>
      </div>
    <h1 class="vue-title">Food Items</h1>
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
  data () {
    return {
      authName: '',
      authPassword: '',
      popup: false,
      loginStatus: null
    }
  },
  methods: {
    submitUser () {
      console.log('This is a point that i reach')
      /* var user = {
        authName: this.authName,
        authPassword: this.authPassword
      }
      this.user = user
      console.log('Submitting in DonationForm : ' +
        JSON.stringify(this.user, null, 5))
      this.$emit('user-is-created-updated', this.user) */
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
