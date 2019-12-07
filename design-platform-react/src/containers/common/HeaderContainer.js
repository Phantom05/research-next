import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Responsive } from 'components/common/responsive';
import { PlainHeader } from 'components/common/header';

class HeaderContainer extends Component {
  render() {
    const { authReducer } = this.props;
    const { isLogged } = authReducer;
    return (
      <div>
        <PlainHeader isLogged={isLogged} />
      </div>
    );
  }
}

export default connect(({ home, auth }) => ({
  homeReducer: home,
  authReducer: auth,
}))(HeaderContainer);