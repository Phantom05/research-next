import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:3000/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});


export const postTest  = async ()=>{
  const url = `https://jsonplaceholder.typicode.com/todos/1`;
  const {data,error} = await axios.get(url).catch(err=>({error:err}));
  return {data,error}
}
