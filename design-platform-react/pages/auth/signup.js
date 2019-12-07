import React, { Component } from 'react';
import { PlainHeader } from 'components/common/header';
import { PlainTemplate } from 'components/base/template';
import { Responsive } from 'components/common/responsive';
import { Login as LoginComponent } from 'components/auth'

class Signup extends Component {
  render() {
    return (
      <PlainTemplate
        header={<PlainHeader />}
        contentPosition="centerCenter"
      >
        <Responsive>
          <div className="main">
           Signup
          </div>
        </Responsive>
      </PlainTemplate>
    );
  }
}

export default Signup;


