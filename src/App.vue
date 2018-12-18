<template>
  <div id="app">
    <div id="nav">
    <b-navbar toggleable="md">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/rabbit.gif" class="img-circle" style="padding: 5px" height="55" width="55"/>
      <b-navbar-brand to="/">Food App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="food home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/food"><i class="food list" style="padding: 5px"> Food</i></b-nav-item>
          <b-nav-item to="/addfood"><i class="food add" style="padding: 5px"> Add Food</i></b-nav-item>
          <b-nav-item to="/map"><i class="map" style="padding: 5px">Map</i></b-nav-item>
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
  </div>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'

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
