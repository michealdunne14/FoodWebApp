<template>
  <div id="app">
    <div id="nav">
    <b-navbar toggleable="md">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/rabbit.gif" class="img-circle" style="padding: 5px" height="55" width="55"/>
      <b-navbar-brand to="/">Donations Web App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/food"><i class="fa fa-list" style="padding: 5px"> Food</i></b-nav-item>
          <b-nav-item to="/addfood"><i class="fa fa-money" style="padding: 5px"> Add Food</i></b-nav-item>
          <b-nav-item to="/map"><i class="fa fa-globe" style="padding: 5px"> Map</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about"><i class="fa fa-info" style="padding: 5px"> About Us</i></b-nav-item>
          <b-nav-item to="/contact"><i class="fa fa-comment" style="padding: 5px"> Contact Us</i></b-nav-item>
          <b-nav-item to="/login"><i class="fa fa-sign-in" style="padding: 5px"> Login </i></b-nav-item>
          <b-nav-item to="/logout"><i class="fa fa-sign-out" style="padding: 5px"> Logout </i></b-nav-item>
          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: white;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    </div>
    <router-view/>
    <div class="leftsidenav">
      <a href="#">Post</a>
      <div class="form-group" :class="{ 'form-group--error': $v.upvote.$error }">
        <button class="put_input" v-bind="upvote" type="button">UpVote</button>
      </div>
    </div>
    <div class="rightsidenav">
      <a href="#">Post</a>
      <div class="form-group" :class="{ 'form-group--error': $v.upvote.$error }">
        <button class="put_input" v-bind="upvote" type="button">UpVote</button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import foodservice from '@/services/foodservice'
import {required} from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  name: 'App',
  data () {
    return {
      upvote: 0
    }
  },
  validations: {
    upvote: {
      required
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var vote = {
            upvote: this.upvote
          }
          this.upvote = vote
          this.submitFood(this.food)
        }, 500)
      }
    },
    submitFood: function (food) {
      foodservice.putUpvote(food)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Times New Roman', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: beige;
  }
  .leftsidenav {
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 200px; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 71px; /* Stay at the top */
    left: 0;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
    background-color: darkgray;
  }

  .rightsidenav {
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 200px; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 71px; /* Stay at the top */
    right: 0;
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;
    background-color: darkgray;
  }

  #nav {
   background-color: darkgray;
  }

  .leftsidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: white;
    display: block;
  }
</style>
