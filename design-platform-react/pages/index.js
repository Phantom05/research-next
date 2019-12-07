import React, { Component } from 'react';
import { PlainHeader } from 'components/common/header';
import { PlainTemplate } from 'components/base/template';
import axios from 'axios';
import { connect } from 'react-redux';
import HomeMain from 'components/common/main/HomeMain'
import {Responsive} from 'components/common/responsive';
// import { Button, Modal } from 'react-bootstrap';
// import { Actions } from 'store/actionCreators';

class Index extends Component {
  // static async getInitialProps({ req }) {
  //   const config = {
  //     url: `https://jsonplaceholder.typicode.com/users`
  //   }
  //   const { data } = await axios(config);
  //   return {
  //     data
  //   }
  // }
  render() {
    const { data, homeReducer, authReducer } = this.props;
    const { isLogged } = authReducer;
    return (
      <PlainTemplate header={<PlainHeader isLogged={isLogged} />}>
        <Responsive >
          <HomeMain />
        </Responsive>
      </PlainTemplate>
    );
  }
}

export default connect(({ home, auth }) => ({
  homeReducer: home,
  authReducer: auth,
}))(Index);