<template>
  <div id="app">
    <div id="nav">
    <b-navbar toggleable="md">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/rabbit.gif" class="img-circle" style="padding: 5px" height="55" width="55"/>
      <b-navbar-brand to="/">Donations Web App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="food home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/food"><i class="food list" style="padding: 5px"> Food</i></b-nav-item>
          <b-nav-item to="/addfood"><i class="food add" style="padding: 5px"> Add Food</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about"><i class="fa fa-info" style="padding: 5px"> About Us</i></b-nav-item>
          <b-nav-item to="/contact"><i class="fa fa-comment" style="padding: 5px"> Contact Us</i></b-nav-item>
          <button to="/logout"><i class="fa fa-sign-out" style="padding: 5px"> Logout </i></button>
          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: white;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    </div>
    <router-view/>
    <div class="ui sidebar inverted vertical menu">
      <a class="item">
        1
      </a>
      <a class="item">
        2
      </a>
      <a class="item">
        3
      </a>
    </div>
    <div class="pusher">
      <!-- Site content !-->
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
      fooditem: '',
      upvote: 0
    }
  },
  validations: {
    upvote: {
      required
    },
    fooditem: {
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  #nav {
   background-color: darkgray;
  }

  .VueTables__sortable {
    cursor: pointer;
  }
</style>
