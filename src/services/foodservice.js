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
  }
}
