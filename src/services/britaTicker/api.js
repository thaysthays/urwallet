import axios from 'axios'
import { endpoint } from './config'

export const getBrita = async () => {
  return axios({
    url: `${endpoint}`,
    method: 'GET'
  })
}
