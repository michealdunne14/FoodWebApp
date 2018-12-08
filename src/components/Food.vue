<template>
  <div id="app1">
    <v-client-table :columns="columns" :data="food" :options="options">
      <a slot="upvote" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="upvote(props.row._id)"></a>
      <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteFood(props.row._id)"></a>
      <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editFood(props.row._id)"></a>
    </v-client-table>
  </div>
</template>

<script>
import FoodService from '@/services/foodservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Food',
  data () {
    return {
      messagetitle: ' Food List ',
      food: [],
      props: ['_id'],
      errors: [],
      columns: ['coursedinner', 'fooditem', 'upvotes', 'downvotes', 'donation', 'upvote', 'remove', 'edit'],
      options: {
        sortable: ['upvotes'],
        headings: {
          coursedinner: 'Course',
          fooditem: 'Food Item',
          upvotes: 'Upvotes',
          downvotes: 'Downvotes',
          donation: 'Donation'
        }
      }
    }
  },
  created () {
    this.loadFood()
  },
  methods: {
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
    upvote: function (id) {
      FoodService.upvoteFood(id)
        .then(response => {
          console.log(response)
          this.loadFood()
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    deleteFood: function (id) {
      this.$swal({
        title: 'Are you sure you want to delete this',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ok Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(result => {
        console.log('SWAL:' + result)
        if (result === true) {
          FoodService.deleteFood(id)
            .then(response => {
              this.message = response.data
              console.log(this.message)
              this.loadFood()
              this.$swal('Deleted', 'You successfully deleted this Donation' + JSON.stringify(response.data, null, 5), 'success')
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
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
</style>
