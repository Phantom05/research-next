import React, { Component } from 'react';
import { PlainTemplate } from 'components/base/template';
import {HomeContainer} from 'containers/home';
import {HeaderContainer} from 'containers/common';
// import { Button, Modal } from 'react-bootstrap';

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
    return (
      <PlainTemplate header={<HeaderContainer />}>
          <HomeContainer />
      </PlainTemplate>
    );
  }
}

export default Index