import React, { Component } from 'react';
import {PlainTemplate} from 'components/base/template'; 
import PlainHeader from 'components/base/header/PlainHeader'; 

class About extends Component {
  render() {
    return (
      <PlainTemplate header={<PlainHeader/> }>
        About
      </PlainTemplate>
    );
  }
}

export default About;

