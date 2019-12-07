import React, { Component } from 'react';
import { PlainTemplate } from 'components/base/template';
import { Responsive } from 'components/common/responsive';
import {HeaderContainer} from 'containers/common';
import { LoginContainer } from 'containers/auth';

class Login extends Component {
  render() {
    return (
      <PlainTemplate
        header={<HeaderContainer />}
        contentPosition="centerCenter"
      >
        <Responsive className={'widthAuto'}>
          <LoginContainer />
        </Responsive>
      </PlainTemplate>
    );
  }
}

export default Login;


