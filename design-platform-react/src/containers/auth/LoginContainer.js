import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Login as LoginComponent } from 'components/auth';
import * as actions from 'store/actions';
import Router from 'next/router';
import {regEmail,regPassword} from 'lib/utils';

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
  handleClick = () => {
    const {email,password,remember} = this.state;
    
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
    this.handleSubmit(info)
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
  handleSubmit=async (value)=>{
    actions.login_update(value)
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
    console.log('dg');
  }
  componentWillUnmount(){
    this._failureIdx = false;
  }
  render() {
    const {failureIdx} = this.state;
    const {authReducer} = this.props;
    if(authReducer.isLogged){
      Router.push('/')
    }
    if(authReducer.login.failure && !this._failureIdx){
      console.log('falu');
      this.handleFailure()
      // alert('실패.')
    }
    return (
      <div>
        <LoginComponent 
          {...this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleFocus={this.handleFocus}
          handleClick={this.handleClick}
          handleTestButton={this.handleTestButton}
        />
      </div>
    );
  }
}

export default connect(({ home, auth }) => ({
  homeReducer: home,
  authReducer: auth,
}))(LoginContainer);