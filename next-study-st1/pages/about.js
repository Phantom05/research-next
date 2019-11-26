import React, { Component } from 'react';
import { PlainTemplate } from 'components/base/template';
import { MainHeader } from 'components/base/header';
import { getUser } from 'lib/api'

class About extends Component {
  static async getInitialProps() {
    const { data } = await getUser();
    return {
      data: data
    }
  }
  render() {
    console.log(this.props);
    const { data } = this.props;
    return (
      <PlainTemplate header={<MainHeader />}>
        About
        <ul>
          {data.map(
            user => <li key={user.id}>{user.name}</li>
          )}
        </ul>
      </PlainTemplate>
    );
  }
}


export default About;