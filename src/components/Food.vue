<template>
  <div id="app1">
    <v-client-table id="dropdown-content" :columns="columns" :data="food" :options="options">
      <i slot="content" slot-scope="props"  class="archive icon" @click="fooddesc(props.row._id)"></i>
      <i slot="upvote" slot-scope="props"  class="thumbs up icon" @click="upvote(props.row._id) & random({title:'{{option}}',text:'{{content}}'})"></i>
      <i slot="remove" slot-scope="props" class="trash icon" @click="deleteFood(props.row._id)"></i>
      <i slot="edit" slot-scope="props" class="edit icon" @click="editFood(props.row._id)"></i>
    </v-client-table>
      <div class="centerx">
        <vs-popup  title="Content" :active.sync="popup" >
          <card v-bind:fooditem="fooditem" v-bind:des="des" v-bind:image="image" @click="submitFood"></card>
        </vs-popup>
      </div>
  </div>
</template>

<script>
import FoodService from '@/services/foodservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
import Card from '@/components/Card'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Food',
  // Data
  data () {
    return {
      messagetitle: ' Food List ',
      food: [],
      des: '',
      fooditem: '',
      image: '',
      popup: false,
      option: null,
      content: null,
      props: ['_id'],
      errors: [],
      columns: ['coursedinner', 'fooditem', 'upvotes', 'content', 'upvote', 'remove', 'edit'],
      options: {
        filterable: ['coursedinner', 'fooditem', 'upvotes'],
        sortable: ['upvotes'],
        headings: {
          coursedinner: 'Course',
          fooditem: 'Food Item',
          upvotes: 'Upvotes',
          downvotes: 'Downvotes'
        }
      }
    }
  },
  // Run on start
  created () {
    this.loadFood()
  },
  // Components used
  components: {
    'card': Card
  },
  // Methods Used
  methods: {
    // Gets the color for the Notification
    random () {
      let color = `rgb(${255},${0},${0})`
      this.$vs.notify({
        title: this.option,
        text: this.content,
        color: color
      })
    },
    // Load in the food in to the tables
    loadFood: function () {
      FoodService.fetchFood()
        .then(response => {
          // JSON responses are automatically parsed.
          this.food = response.data
          console.log(this.food)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    // Upvote for food
    upvote: function (id) {
      // Sets the string for notification
      this.option = 'Like'
      this.content = 'You Liked a Post'
      // Gets upvote from backend
      FoodService.upvoteFood(id)
        .then(response => {
          console.log(response)
          // Loads the food back in
          this.loadFood()
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    // Edit the food values
    editFood: function (id) {
      this.$router.params = id
      this.$router.push('edit')
      this.loadFood()
    },
    // Deletes the food from the database
    deleteFood: function (id) {
      this.$swal({
        // Sweet Alert Values
        title: 'Are you totaly sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result)
        if (result === true) {
          // Delete the food from backend
          FoodService.deleteFood(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadFood()
              this.$swal('Deleted', 'You successfully deleted this Donation ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          this.$swal('Cancelled', 'Your Donation still Counts!', 'info')
        }
      })
    },
    // Sets the values for the card
    fooddesc: function (id) {
      for (var i = 0; i < this.food.length; i++) {
        if (this.food[i]._id === id) {
          this.popup = true
          this.des = this.food[i].description
          this.fooditem = this.food[i].fooditem
          this.image = this.food[i].image
          console.log(this.image)
        }
      }
    }
  }
}

</script>

<style scoped>
  #app1 {
    width: 60%;
    margin: 0 auto;
    background-color: white;
  }
</style>
