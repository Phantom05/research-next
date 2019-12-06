import React, { Component } from 'react';
import { PlainHeader } from 'components/common/header';
import { PlainTemplate } from 'components/base/template';
import styled from 'styled-components';
import axios from 'axios';
import {connect} from 'react-redux';
import {Actions} from 'store/actionCreators';

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

  handleClick=(value)=>{
    console.log('handleClick');
    if(value === 'up'){
      Actions.COUNTER_INCREASE()
    }else{
      Actions.COUNTER_DECREASE()
    }
    
  }
  render() {
    const { data,homeReducer } = this.props;
    const {number} = homeReducer;
    return (
      <PlainTemplate
        header={<PlainHeader />}>
        <Styled.Index>
          {data && data.map(
            (info,idx) => <div key={info.id} className="test">{info.name}</div>
          )}
          {number}
          <button onClick={()=>this.handleClick('up')}>+</button>
          <button onClick={()=>this.handleClick('down')}>-</button>
        </Styled.Index>
      </PlainTemplate>
    );
  }
}

export default connect(({home})=>({
  homeReducer:home
}))(Index);