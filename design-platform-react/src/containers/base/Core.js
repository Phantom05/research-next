import React, { Component } from 'react';
import {storage,keys} from 'lib/utils';
import { connect } from 'react-redux';
import * as actions from 'store/actions';

class Core extends Component {
  initialize = async () => {
    const token = storage.get(`${keys.user}token`);
    if (!token) {
      console.log('not token');
      
      // return Actions.base_exit_landing();
    }
    if (token) {
      console.log('token in');
      actions.token_update(token)
      // Actions.base_enter_landing();
      // Actions.auth_token_request({ token });
    }
  }

  componentDidMount(){
    const { initialize } = this;
    console.log('core');
    initialize()
  }
  render() {
    const {baseReducer} = this.props;
    console.log(baseReducer,'baseReducer');
    if(baseReducer === true){
      return null
    }
    return (
      <div>
        
      </div>
    );
  }
}

export default connect(({ home, auth ,base}) => ({
  homeReducer: home,
  authReducer: auth,
  baseReducer:base
}))(Core);

