import React, { Component } from 'react';
import { PlainHeader } from 'components/common/header';
import { PlainTemplate } from 'components/base/template';
import { Responsive } from 'components/common/responsive';
class About extends Component {
  render() {
    return (
      <PlainTemplate
        header={<PlainHeader />}>
        <Responsive>
          About
          </Responsive>
      </PlainTemplate>
    );
  }
}

export default About;