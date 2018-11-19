import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Food from '@/components/Food'
import AddFood from '@/components/AddFood'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    },
    {
      path: '/addfood',
      name: 'AddFood',
      component: AddFood
    }
  ]
})
