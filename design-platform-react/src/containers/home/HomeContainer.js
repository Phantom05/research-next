import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeMain from 'components/main/HomeMain'

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <HomeMain />
      </div>
    );
  }
}

export default connect(({ home, auth }) => ({
  homeReducer: home,
  authReducer: auth,
}))(HomeContainer);