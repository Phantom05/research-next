import React, { Component } from 'react';
import {PlainTemplate} from 'components/base/template';
import {MainHeader} from 'components/base/header';

class About extends Component {
  render() {
    return (
      <PlainTemplate header={<MainHeader />}>
        About
      </PlainTemplate>
    );
  }
}

export default About;