<template>
  <div id="app1">
    <v-client-table id="dropdown-content" :columns="columns" :data="food" :options="options">
      <i slot="content" slot-scope="props"  class="archive icon" @click="popup=true & fooddesc(props.row._id)"></i>
      <i slot="upvote" slot-scope="props"  class="thumbs up icon" @click="upvote(props.row._id) & random({title:'Like',text:'You Liked a Post'})"></i>
      <i slot="remove" slot-scope="props" class="trash icon" @click="deleteFood(props.row._id)"></i>
      <i slot="edit" slot-scope="props" class="edit icon" @click="editFood(props.row._id)"></i>
    </v-client-table>
      <div class="centerx">
        <vs-popup  title="Content" :active.sync="popup">
            <p id="paragraph">
            </p>
          <img src="https://images.idgesg.net/images/article/2018/03/sky-3213435_1280-100752061-large.jpg" style="width:550px;height:400px">
        </vs-popup>
      </div>
    {{des}}
  </div>
</template>

<script>
import FoodService from '@/services/foodservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
import Card from '@/components/Card'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax)

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Food',
  data () {
    return {
      messagetitle: ' Food List ',
      food: [],
      des: '',
      popup: false,
      props: ['_id'],
      option: null,
      content: null,
      errors: [],
      columns: ['coursedinner', 'fooditem', 'upvotes', 'downvotes', 'content', 'upvote', 'remove', 'edit'],
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
  created () {
    this.loadFood()
  },
  components: {
    'card': Card
  },
  methods: {
    random () {
      let color = `rgb(${255},${0},${0})`
      this.$vs.notify({
        title: this.option,
        text: this.content,
        color: color
      })
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
    },
    upvote: function (id) {
      this.option = 'Like'
      this.content = 'You Liked a Post'
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
    editFood: function (id) {
      this.$router.params = id
      this.$router.push('edit')
      this.loadFood()
    },
    deleteFood: function (id) {
      this.$swal({
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
          FoodService.deleteFood(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadFood()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
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
    fooddesc: function (id) {

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

  #image {
    width: 500px;
  }

  #paragraph {
    font-size: large;
  }

</style>
