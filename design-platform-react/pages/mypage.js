import React, { Component } from 'react';
import {HeaderContainer} from 'containers/common';
import { PlainTemplate } from 'components/base/template';
class Mypage extends Component {
  render() {
    return (
      <PlainTemplate
        header={<HeaderContainer />}>
        Mypage
      </PlainTemplate>
    );
  }
}

export default Mypage;