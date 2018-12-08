<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <select id="coursedinner" name="coursedinner" class="form-control" type="text"  placeholder="Course" v-model="coursedinner">
        <option value="Starter">Starter</option>
        <option value="Main">Main</option>
        <option value="Desert">Desert</option>
      </select>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.fooditem.$error }">
      <input class="form__input" v-model.trim="fooditem" placeholder="Name of Food"/>
    </div>
    <p>
      <button id="addbtn" class="ui button" type="submit" :disabled="submitStatus === 'PENDING'">Add</button>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Posted!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Posting...</p>
  </form>
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
  name: 'Donate',
  data () {
    return {
      coursedinner: 'Course',
      fooditem: '',
      props: ['donationBtnTitle'],
      submitStatus: null
    }
  },
  validations: {
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
          var food = {
            coursedinner: this.coursedinner,
            fooditem: this.fooditem
          }
          this.food = food
          this.$emit('donation-is-created-updated', this.donation)
        }, 500)
      }
    },
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

  #addbtn{
    width: 300px;
    font-size: x-large;
    background: #157ffb;
    color: whitesmoke;
    font-family: "Calibri";
  }
</style>
