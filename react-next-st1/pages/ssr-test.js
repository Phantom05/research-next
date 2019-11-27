import React, { Component } from 'react';
import PlainTemplate from 'components/base/template/PlainTemplate';
import MainHeader from 'components/base/header/MainHeader';
import axios from 'axios';


class SSRTest extends Component {
  static async getInitialProps ({req}){
    console.log(req,'req');
    // 서버에서 실행하면, req가 들어옴 즉, url 직접 치면 req들어옴
    // 내부에서 Link로 이동하면 req가 undefined임.
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return {
      users:data
    }
  }
  render() {
    const {users} = this.props;
    console.log(users);
    let userList = users.map(
      user => <li key={user.id}>{user.username}</li>
    )
    return (
      <PlainTemplate header={<MainHeader/>}>
        {this.props.from}
        <ul>{userList}</ul>
      </PlainTemplate>
    );
  }
}

export default SSRTest;