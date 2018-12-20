<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <card :food="fooditem" donationBtnTitle="Add Food"
                     @food-is-created-updated="submitFood"></card>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import foodservice from '@/services/foodservice'
import {required} from 'vuelidate/lib/validators'
import Card from '@/components/Card'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  name: 'Add Food',
  data () {
    return {
      fooditem: {coursedinner: 'Course', fooditem: '', description: '', image: ''},
      messagetitle: 'Add Food'
    }
  },
  validations: {
    fooditem: {
      required
    }
  },
  components: {
    'card': Card
  },
  methods: {
    submitFood: function (food) {
      foodservice.postFood(food)
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
  .form-group {
    width: 550px;
    margin:auto;
    border-radius:6px;
  }

  #coursedinner{
    margin-top: 20px;
    margin-bottom: 20px;
  }
  #app1 {
    background-color: white;
  }

  #addbtn{
    width: 300px;
    font-size: x-large;
    background: #157ffb;
    color: whitesmoke;
    font-family: "Calibri";
  }
</style>
