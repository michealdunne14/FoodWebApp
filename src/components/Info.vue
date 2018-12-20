<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <p>
      This is an app that shows off the CRUD usage in the front end and how view this data and find places through food.
      All the code can be found on my github along with some information.Link to GitHub: <a href="https://github.com/michealdunne14/FoodWebApp">Food Web App Link</a>
    </p>
    <iframe src="https://giphy.com/embed/l1L2UkgpuiE4U" width="480" height="287" frameBorder="0" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/eating-cartoon-mouse-l1L2UkgpuiE4U"></a></p>
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
  name: 'Information',
  // Message title
  data () {
    return {
      messagetitle: ' Information '
    }
  }
}
</script>

<style scoped>
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 20px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }
  #app1 {
    background-color: white;
  }

</style>
