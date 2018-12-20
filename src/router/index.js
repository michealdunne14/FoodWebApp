import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Food from '@/components/Food'
import AddFood from '@/components/AddFood'
import Edit from '@/components/Edit'
import Map from '@/components/Map'
import Info from '@/components/Info'

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
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ]
})
