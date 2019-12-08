import React, { Component } from 'react';
import {HeaderContainer} from 'containers/common';
import { PlainTemplate } from 'components/base/template';
class About extends Component {
  render() {
    return (
      <PlainTemplate
        header={<HeaderContainer />}>
        Guide
      </PlainTemplate>
    );
  }
}

export default About;