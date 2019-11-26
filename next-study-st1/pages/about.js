import React, { Component } from 'react';
import { PlainTemplate } from 'components/base/template';
import { MainHeader } from 'components/base/header';
import { connect } from "react-redux";
import { getUser } from 'lib/api'
import {Actions} from 'store/actionCreators';

class About extends Component {
  static async getInitialProps() {
    const { data } = await getUser();
    return {data}
  }
  handleClick=()=>{
    Actions.increment()
  }
  render() {
    const { data, homeReducer } = this.props;
    const {count} = homeReducer;
    return (
      <PlainTemplate header={<MainHeader />}>
        About
        <ul>
          {data.map(
            user => <li key={user.id}>{user.name}</li>
          )}
        </ul>
        <h2>{count}</h2>
        <button onClick={this.handleClick}>Increment</button>
      </PlainTemplate>
    );
  }
}


export default connect(({home})=>({
  homeReducer:home
}))(About);