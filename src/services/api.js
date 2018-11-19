import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://foodapp1.herokuapp.com'
  })
}
