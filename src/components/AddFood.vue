<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <food-form :food="fooditem" foodBtnTitle="Add Food"
                         @food-is-created-updated="submitFood"></food-form>
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
import FoodForm from '@/components/FoodForm'

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
  // Data
  data () {
    return {
      fooditem: {coursedinner: 'Course', fooditem: '', description: '', image: ''},
      messagetitle: 'Add Food'
    }
  },
  // Requirements
  validations: {
    fooditem: {
      required
    }
  },
  // Component
  components: {
    'food-form': FoodForm
  },
  methods: {
    // Submit food to the Database
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
  #app1 {
    background-color: white;
  }
</style>
