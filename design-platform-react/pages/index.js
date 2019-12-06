import React, { Component } from 'react';
import { PlainHeader } from '../src/components/header';
import { PlainTemplate } from '../src/components/base/template';
import styled from 'styled-components';
import axios from 'axios';


const Styled = {
  Index: styled.div`
    color:#333;
    .test{
      border:1px solid #ccc;
    }
  `
}
class Index extends Component {
  static async getInitialProps({ req }) {
    const config = {
      url: `https://jsonplaceholder.typicode.com/users`
    }
    const { data } = await axios(config);
    return {
      data
    }
  }
  render() {
    const { data } = this.props;
    return (
      <PlainTemplate
        header={<PlainHeader />}>
        <Styled.Index>
          {data && data.map(
            (info,idx) => <div key={info.id} className="test">{info.name}</div>
          )}
        </Styled.Index>
      </PlainTemplate>
    );
  }
}

export default Index;