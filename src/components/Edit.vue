<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
          <food-form :food="fooditem" donationBtnTitle="Update Food"
                         @food-is-created-updated="updateFood"></food-form>
          </template>
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
  name: 'Update Food',
  data () {
    return {
      fooditem: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: 'Update Food'
    }
  },
  components: {
    'food-form': FoodForm
  },
  created () {
    this.getFood()
  },
  methods: {
    getFood: function () {
      foodservice.fetchFood(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.fooditem = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting Donation in Edit: ' + JSON.stringify(this.fooditem, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateFood: function (food) {
      console.log('Before PUT ' + JSON.stringify(food, null, 5))
      foodservice.putFood(this.$router.params, food)
        .then(response => {
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

  #addbtn{
    width: 300px;
    font-size: x-large;
    background: #157ffb;
    color: whitesmoke;
    font-family: "Calibri";
  }
</style>
