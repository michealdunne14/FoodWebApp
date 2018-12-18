import Api from '@/services/api'

export default {
  fetchFood () {
    return Api().get('/foodList')
  },
  fetchUser () {
    return Api().get('/user')
  },
  postFood (food) {
    return Api().post('/foodList', food,
      { headers: {'Content-type': 'application/json'} })
  },
  putUpvote (food) {
    return Api().put('/foodList/:id/upvote', food,
      { headers: {'Content-type': 'application/json'} })
  },
  upvoteFood (id) {
    return Api().put(`/foodList/${id}/upvote`)
  },
  deleteFood (id) {
    return Api().delete(`/foodList/Id/${id}`)
  },
  fetchFoodByOne (id) {
    return Api().get(`/donations/${id}`)
  },
  putFood (id, food) {
    console.log('REQUESTING ' + food._id + ' ' +
      JSON.stringify(food, null, 5))
    return Api().put(`/foodList/${id}`, food,
      { headers: {'Content-type': 'application/json'} })
  }
}
