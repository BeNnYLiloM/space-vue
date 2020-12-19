import axios from '@/api/axios'

const getAll = () => {
  return axios.get('/launchpads').then(response => response.data)
}

const getLaunchpadById = id => {
  const query = {
    query: {
      _id: id
    },
    options: {
      populate: {
        path: 'launches',
        match: {
          success: false
        }
      }
    }
  }

  return axios
    .post('/launchpads/query', query)
    .then(response => response.data.docs[0])
}

export default {
  getAll,
  getLaunchpadById
}
