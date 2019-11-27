import axios from 'axios';

export function getPost(){
  return axios.get(`http://jsonplaceholder.typicode.com/users`)
}