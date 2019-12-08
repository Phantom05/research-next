import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PlainHeader } from 'components/common/header';
import * as actions from 'store/actions';
import {storage,keys} from 'lib/utils';
// import { Responsive } from 'components/common/responsive';

class HeaderContainer extends Component {
  handleClick=(value)=>{
    if(value === 'logout'){
      actions.logout_update()
    }
  }
  render() {
    const { authReducer } = this.props;
    const { isLogged,profile } = authReducer;
    return (
      <div>
        <PlainHeader 
          isLogged={isLogged} 
          handleClick={this.handleClick}
          profile={profile}
        />
      </div>
    );
  }
}

export default connect(({ home, auth }) => ({
  homeReducer: home,
  authReducer: auth,
}))(HeaderContainer);