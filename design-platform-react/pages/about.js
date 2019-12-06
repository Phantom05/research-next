import React, { Component } from 'react';
import {PlainHeader} from 'components/common/header';
import { PlainTemplate } from 'components/base/template';
class About extends Component {
  render() {
    return (
      <PlainTemplate
        header={<PlainHeader />}>
        About
      </PlainTemplate>
    );
  }
}

export default About;