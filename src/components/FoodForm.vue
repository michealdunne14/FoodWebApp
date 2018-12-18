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
      <vs-input label-placeholder="Name of Food" v-model.trim="fooditem"/>
      <div>
      <vs-textarea color="blue" label="Description" v-model="description" />
      </div>
    </div>
    <vs-upload v-model.trim="image" />
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
import {required} from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)

export default {
  name: 'Donate',
  props: ['donationBtnTitle'],
  data () {
    return {
      coursedinner: 'Course',
      fooditem: '',
      description: '',
      image: '',
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
            fooditem: this.fooditem,
            description: this.description,
            image: this.image
          }
          this.food = food
          console.log('Submitting in DonationForm : ' +
            JSON.stringify(this.food, null, 5))
          this.$emit('food-is-created-updated', this.food)
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .donate-form .form-control-label.text-left{
    text-align: left;
  }

  description {
    padding-top: 50px;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }
  #app {
    text-align: center;
  }
  img {
    width: 30%;
    margin: auto;
    display: block;
    margin-bottom: 10px;
  }
  button {

  }

  #foodname {
    border-radius: 50px;
  }
  #text {
    border-radius: 50px;
    columns: 50px;
    padding-bottom: 50px;
  }

  #coursedinner {
    border-radius: 50px;
  }

  #image {
    border-radius: 50px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
  #description{
    background: white;
  }
</style>
