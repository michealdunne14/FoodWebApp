<template>
  <div id=app>
    <h1>
      {{fooditem}}
    </h1>
    <p id="paragraph">
      {{des}}
    </p>
    <img src="https://images.idgesg.net/images/article/2018/03/sky-3213435_1280-100752061-large.jpg" style="width:550px;height:400px">
  </div>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
// import FoodService from '@/services/foodservice'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)

export default {
  props: ['fooditem', 'des'],
  data () {
    return {
      submitStatus: null
    }
  },
  created () {
    // this.loadFood()
    this.fooddesc(this.food._id)
  },
  methods: {
    /* loadFood: function () {
    },
    /*fooddesc: function (id) {
      var find = food.fooditem
      console.log(find)
      for (var i = 0; i < this.food.length; i++) {
        if (this.food[i]._id === id) {
          this.des = this.food[i].description
          // this.fooditem = this.food[i].fooditem
        }
      }
    } */
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
