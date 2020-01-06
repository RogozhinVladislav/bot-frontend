import axios from 'axios'
import config from '../config'

const http = axios.create({
  baseURL: config.baseUrl,
  headers: {},
})

// http.init = () => {}

export default http
