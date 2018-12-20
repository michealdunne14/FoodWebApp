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
          <b-nav-item to="/info"><i class="fa fa-comment" style="padding: 5px">Information</i></b-nav-item>
          <h2 to="/user"><i style="padding: 5px">{{name}}</i></h2>
          <vs-button @click="popup=true" color="blue" type="filled">Login</vs-button>
          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: white;"></i>
        </b-navbar-nav>
        <div class="centerx">
          <vs-popup title="Login/SignUp" :active.sync="popup">
            <div class="centerx icons-example">
              <vs-input label-placeholder="icon-after" placeholder="UserName" v-model.trim="authName"/>
              <vs-input id="password" label-placeholder="icon-after" placeholder="Password" v-model.trim="authPassword"/>
              <vs-button id="button" color="blue" type="filled" @click="login">Login</vs-button>
            </div>
            <div>
              <div slot="header">
                Sign Up
              </div>
              <div class="centerx">
                <vs-input label-placeholder="icon-after" placeholder="UserName" v-model.trim="authName"/>
                <vs-input id="signup" label-placeholder="icon-after" placeholder="Password" v-model.trim="authPassword"/>
                <vs-button color="blue" @click="addUser" type="filled">Sign Up</vs-button>
              </div>
            </div>
          </vs-popup>
        </div>
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
import FoodService from '@/services/foodservice'
import 'material-icons/iconfont/material-icons.css'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.use(Vuesax)

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
      user: [],
      authName: '',
      authPassword: '',
      name: '',
      props: ['authName', 'authPassword'],
      popup: false,
      loginStatus: null
    }
  },
  created () {
    this.loadUser()
  },
  methods: {
    loadUser: function () {
      FoodService.fetchUser()
        .then(response => {
          // JSON responses are automatically parsed.
          this.user = response.data
          console.log(this.user)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    login () {
      console.log('submit!')
      setTimeout(() => {
        let user = {
          name: this.authName,
          password: this.authPassword
        }
        this.user = user
        this.submitUser(user)
      }, 500)
    },
    submitUser: function (user) {
      FoodService.getLoginUser(user)
      console.log(user)
        .then(response => {
          console.log(response)
          console.log(user)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    addUser () {
      setTimeout(() => {
        var user = {
          authName: this.authName,
          authPassword: this.authPassword,
          popup: false
        }
        this.user = user
        this.submitaddUser(this.user)
      }, 500)
    },
    submitaddUser: function (user) {
      FoodService.postUser(user)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log('This is a point that i reach')
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
   background-color: white;
    font-weight: bold;
    font-family: Calibri;
    font-size: large;
  }
  .VueTables__sortable {
    cursor: pointer;
  }
</style>
