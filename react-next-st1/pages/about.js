import { Component } from 'react';
import PlainTemplate from 'components/base/template/PlainTemplate';
import MainHeader from 'components/base/header/MainHeader';

class About extends Component {
  render() {
    return (
      <PlainTemplate header={<MainHeader/>}>
        About
      </PlainTemplate>
    );
  }
}

export default About;