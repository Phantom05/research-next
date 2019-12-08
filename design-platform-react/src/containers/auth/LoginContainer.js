import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login } from 'components/auth';
import * as actions from 'store/actions';
import Router from 'next/router';
import {regEmail,regPassword} from 'lib/utils';
import {storage,keys} from 'lib/utils';

//NOTE container로 몰기
class LoginContainer extends Component {
  _failureIdx = false;
  state = {
    failLogin: false,
    failPassword: false,
    focus:null,
    
    email:'',
    password:'',
    remember:false,
    devMode:true,
   
  }
  handleFocus=(e)=>{
    const {name} = e.target;
    this.setState({
      focus:name
    })
  }
  handleChange=(e)=>{
    const {name,value,checked} = e.target;
    this.setState({
      [name]:name === 'remember'?checked:value
    })
  }
  handleSubmit=async (e)=>{
    const {email,password,remember} = this.state;
    if(remember === true){
      storage.set(`${keys.user}remember`,email);
    }else{
      storage.remove(`${keys.user}remember`);
    }
    if(!regEmail(email) || !regPassword(password)){
      this.setState({
        failLogin: false,
      },()=>{
        setTimeout(() => {
          this.setState({
            failLogin: true,
          });
        }, 300);
      });
      return ;
    }
    this.setState({
      failLogin: false
    });

    this._failureIdx = false;
    const info = {
      email,
      password
    }
    actions.login_update(info)
  }
  handleTestButton=(e)=>{
    const {name} = e.target;
    this.setState({
      email:name+'@test.com',
      password:'1234!j4567@',
    })
  }
  handleFailure=()=>{
    this.setState({
      failLogin: false,
    },()=>{
      setTimeout(() => {
        this.setState({
          failLogin: true,
        });
      }, 300);
    });
    this._failureIdx = true;
  }
  componentDidMount(){
    const rememberEmail = storage.get(`${keys.user}remember`);
    if(rememberEmail !==null){
      this.setState({
        email:rememberEmail,
        remember:true
      })
    }
  }
  componentWillUnmount(){
    this._failureIdx = false;
  }
  render() {
    const {authReducer} = this.props;

    if(authReducer.isLogged){
      Router.push('/')
    }
    if(authReducer.login.failure && !this._failureIdx){
      this.handleFailure()
    }

    

    return (
      <Login 
      {...this.state}
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      handleFocus={this.handleFocus}
      handleClick={this.handleClick}
      handleTestButton={this.handleTestButton}
    />
    );
  }
}

export default connect(({ home, auth }) => ({
  homeReducer: home,
  authReducer: auth,
}))(LoginContainer);