import axios from '@/api/axios'

const getAll = () => {
  return axios.get('/starlink').then(response => response.data)
}

export default {
  getAll
}
