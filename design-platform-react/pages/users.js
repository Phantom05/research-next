import React, { Component } from 'react';
import { PlainTemplate } from 'components/base/template';
import { Responsive } from 'components/common/responsive';
import {HeaderContainer} from 'containers/common';

class Users extends Component {
  render() {
    return (
      <PlainTemplate
        header={<HeaderContainer />}
        contentPosition="centerCenter"
      >
        <Responsive className={'widthAuto'}>
        userList
        </Responsive>
      </PlainTemplate>
    );
  }
}

export default Users;


