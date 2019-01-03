import axios from 'axios'
import {GET_ARTICLES} from './types'

const API_URL = "http://localhost:3001"

export default function getArticles() {
  const request = axios.get(`${API_URL}/api/v1/articles`)
  return {
  	type: GET_ARTICLES,
  	payload: request
  }
}