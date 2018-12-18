<template>
  <div id="app1" class="hero">
    <p :datafld="food.description">
      This is the description
    </p>
  </div>
</template>

<script>
import FoodService from '@/services/foodservice'

export default {
  name: 'Card',
  data () {
    return {
      messagetitle: ' Food List ',
      food: []
    }
  },
  created () {
    this.loadFood()
  },
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
  }
}
</script>

<style scoped>

</style>
