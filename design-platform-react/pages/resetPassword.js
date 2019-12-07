import React, { Component } from 'react';
import { PlainHeader } from 'components/common/header';
import { PlainTemplate } from 'components/base/template';
import { Responsive } from 'components/common/responsive';

class ResetPassword extends Component {
  render() {
    return (
      <PlainTemplate
        header={<PlainHeader />}
        contentPosition="centerCenter"
      >
        <Responsive
          className={'widthAuto'}
        >
        resetPassword
        </Responsive>
      </PlainTemplate>
    );
  }
}

export default ResetPassword;



