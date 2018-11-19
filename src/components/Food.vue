<template>
  <div id="app1">
    <v-client-table :columns="columns" :data="food" :options="options">
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
      errors: [],
      columns: ['coursedinner', 'fooditem', 'upvotes', 'downvotes', 'donation'],
      options: {
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
    this.loadDonations()
  },
  methods: {
    loadDonations: function () {
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
