import axios from 'axios';
import {settings} from 'config';

const {apiAddress} = settings;

export function postLogin(value){
  console.log('post Login!');
  const config={
    url:apiAddress+'/test',
    method:'post',
    data:value
  }
  return axios(config)
  .catch(err=>{ return {error:err}})
}