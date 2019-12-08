import React, { Component } from 'react';
import { PlainTemplate } from 'components/base/template';
import { Responsive } from 'components/common/responsive';
import {HeaderContainer} from 'containers/common';

class Project extends Component {
  render() {
    return (
      <PlainTemplate
        header={<HeaderContainer />}
        contentPosition="centerCenter"
      >
        <Responsive className={'widthAuto'}>
        Project
        </Responsive>
      </PlainTemplate>
    );
  }
}

export default Project;


