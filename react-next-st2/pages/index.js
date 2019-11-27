import React, { Component } from 'react';
import {PlainTemplate} from 'components/base/template'; 
import PlainHeader from 'components/base/header/PlainHeader'; 
class Index extends Component {
  render() {
    return (
      <PlainTemplate header={<PlainHeader/> }>
        Index
      </PlainTemplate>
    );
  }
}

export default Index;

