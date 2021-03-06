import React, { Component } from 'react';
import {PlainTemplate} from 'components/base/template';
import {MainHeader} from 'components/base/header';

class Index extends Component {
  render() {
    return (
      <PlainTemplate header={<MainHeader />}>
        main
      </PlainTemplate>
    );
  }
}

export default Index;