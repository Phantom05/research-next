import React, { Component } from 'react';
import {PlainHeader} from '../src/components/header';
import { PlainTemplate } from '../src/components/base/template';
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