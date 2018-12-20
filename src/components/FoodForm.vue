<template>
  <form id="foodform" @submit.prevent="submit">
    <div class="form-group">
      <select id="coursedinner" name="coursedinner" class="form-control" type="text"  placeholder="Course" v-model="coursedinner">
        <option value="Starter">Starter</option>
        <option value="Main">Main</option>
        <option value="Desert">Desert</option>
      </select>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.fooditem.$error }">
      <vs-input id="foodbox" label-placeholder="Name of Food" v-model.trim="fooditem"/>
      <div>
      <vs-textarea color="blue" label="Description" v-model="description" />
      </div>
    </div>
    <div id="file-upload">
      <input id="upload" class="file-upload__input" type="file" >
    </div>
    <p>
      <vs-button color="blue"  type="filled" class="ui button" @click="random({title:'{{option}}',text:'{{content}}'})">Add</vs-button>
    </p>
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
  data () {
    return {
      coursedinner: 'Course',
      fooditem: '',
      description: '',
      image: '',
      option: null,
      content: null,
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
        this.option = 'Error'
        this.content = 'Something went wrong'
      } else {
        // do your submit logic here
        this.option = 'Pending'
        this.content = 'We are working on it'
        setTimeout(() => {
          this.option = 'Success'
          this.content = 'You Posted New Food'
          var food = {
            coursedinner: this.coursedinner,
            fooditem: this.fooditem,
            description: this.description,
            image: this.image
          }
          this.food = food
          console.log('Submitting in FormForm : ' +
            JSON.stringify(this.food, null, 5))
          this.$emit('food-is-created-updated', this.food)
        }, 500)
      }
    },
    random () {
      let color = `rgb(${255},${0},${0})`
      this.$vs.notify({
        title: this.option,
        text: this.content,
        color: color
      })
    }
  }
}
</script>

<style scoped>
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
  #upload {
    margin-right: 50px;
  }

  #file-upload {

  }
  #coursedinner {
    border-radius: 50px;
  }
  #foodbox {
    margin-bottom: 25px;
  }
</style>
